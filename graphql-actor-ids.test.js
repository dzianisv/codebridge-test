const {
  extractActorIds,
  buildAssigneesQuery,
  parseAssignedEvent,
} = require("./graphql-actor-ids");

describe("extractActorIds", () => {
  test("returns empty array when payload is null", () => {
    expect(extractActorIds(null)).toEqual([]);
  });

  test("returns empty array when nodes is missing", () => {
    expect(extractActorIds({})).toEqual([]);
  });

  test("returns actor IDs from nodes", () => {
    const payload = {
      nodes: [
        { id: "MDQ6VXNlcjE=", login: "alice" },
        { id: "MDQ6VXNlcjI=", login: "bob" },
      ],
    };
    expect(extractActorIds(payload)).toEqual(["MDQ6VXNlcjE=", "MDQ6VXNlcjI="]);
  });
});

describe("buildAssigneesQuery", () => {
  test("produces a query string containing owner, repo and issue number as variables", () => {
    const { query, variables } = buildAssigneesQuery("octocat", "Hello-World", 42);
    expect(query).toContain("assignees");
    expect(query).toContain("$owner");
    expect(query).toContain("$repo");
    expect(query).toContain("$issueNumber");
    expect(variables).toEqual({ owner: "octocat", repo: "Hello-World", issueNumber: 42 });
  });

  test("does not interpolate values directly into query string", () => {
    const { query } = buildAssigneesQuery('evil"inject', "repo", 1);
    expect(query).not.toContain("evil");
  });
});

describe("parseAssignedEvent", () => {
  test("returns nulls when event is null", () => {
    expect(parseAssignedEvent(null)).toEqual({ actorId: null, assigneeId: null });
  });

  test("extracts actor and assignee IDs from an event", () => {
    const event = {
      actor: { id: "MDQ6VXNlcjE=" },
      assignee: { id: "MDQ6VXNlcjI=" },
    };
    expect(parseAssignedEvent(event)).toEqual({
      actorId: "MDQ6VXNlcjE=",
      assigneeId: "MDQ6VXNlcjI=",
    });
  });

  test("handles missing actor", () => {
    const event = { assignee: { id: "MDQ6VXNlcjI=" } };
    expect(parseAssignedEvent(event)).toEqual({
      actorId: null,
      assigneeId: "MDQ6VXNlcjI=",
    });
  });

  test("handles missing assignee", () => {
    const event = { actor: { id: "MDQ6VXNlcjE=" } };
    expect(parseAssignedEvent(event)).toEqual({
      actorId: "MDQ6VXNlcjE=",
      assigneeId: null,
    });
  });
});
