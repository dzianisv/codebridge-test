/**
 * GraphQL Actor ID Assignment Utilities
 *
 * Extracts and assigns actor IDs from GitHub GraphQL API responses
 * for issue assignment events.
 */

/**
 * Extracts actor IDs from a GraphQL assignees payload.
 *
 * @param {Object} assigneesPayload - The assignees node from a GraphQL response
 * @returns {string[]} Array of actor node IDs
 */
function extractActorIds(assigneesPayload) {
  if (!assigneesPayload || !assigneesPayload.nodes) {
    return [];
  }
  return assigneesPayload.nodes.map((node) => node.id);
}

/**
 * Builds a GraphQL query to fetch issue assignees with their node IDs.
 * Uses variables to avoid injection of untrusted values into the query string.
 *
 * @param {string} owner - Repository owner
 * @param {string} repo - Repository name
 * @param {number} issueNumber - Issue number
 * @returns {{ query: string, variables: Object }} GraphQL query and variables
 */
function buildAssigneesQuery(owner, repo, issueNumber) {
  const query = `
    query GetAssignees($owner: String!, $repo: String!, $issueNumber: Int!) {
      repository(owner: $owner, name: $repo) {
        issue(number: $issueNumber) {
          assignees(first: 10) {
            nodes {
              id
              login
              databaseId
            }
          }
        }
      }
    }
  `;
  return { query, variables: { owner, repo, issueNumber } };
}

/**
 * Parses a GraphQL assignedEvent response and returns actor IDs.
 *
 * @param {Object} event - A GitHub GraphQL AssignedEvent node
 * @returns {{ actorId: string|null, assigneeId: string|null }}
 */
function parseAssignedEvent(event) {
  if (!event) {
    return { actorId: null, assigneeId: null };
  }
  return {
    actorId: event.actor ? event.actor.id : null,
    assigneeId: event.assignee ? event.assignee.id : null,
  };
}

module.exports = {
  extractActorIds,
  buildAssigneesQuery,
  parseAssignedEvent,
};
