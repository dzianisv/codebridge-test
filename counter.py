class Counter:
    def __init__(self, start=1, end=10):
        self.start = start
        self.end = end

    def run(self):
        for i in range(self.start, self.end + 1):
            print(i)

if __name__ == "__main__":
    counter = Counter()
    counter.run()
