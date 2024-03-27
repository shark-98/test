const tests = []
export const test = (name, cb) => {
  tests.push({ name, cb })
}

const onlys = []
test.only = (name, cb) => {
  onlys.push({ name, cb })
}

export const it = test

export const expect = (result) => {
  return {
    toBe (expectVal) {
      if (expectVal !== result) {
        throw new Error(`expect: ${expectVal} result: ${result}`)
      }
    }
  }
};

const beforeAlls = []
export const beforeAll = (cb) => {
  beforeAlls.push(cb)
};
const runBeforeAll = () => {
  for (const cb of beforeAlls) {
    cb()
  }
}

const beforeEachs = []
export const beforeEach = (cb) => {
  beforeEachs.push(cb)
};
const runBeforeEach = () => {
  for (const cb of beforeEachs) {
    cb()
  }
}

const afterEachs = []
export const afterEach = (cb) => {
  afterEachs.push(cb)
};
const runAfterEach = () => {
  for (const cb of afterEachs) {
    cb()
  }
}

const afterAlls = []
export const afterAll = (cb) => {
  afterAlls.push(cb)
};
const runAfterAll = () => {
  for (const cb of afterAlls) {
    cb()
  }
}

export const describe = (name, cb) => {
  cb()
};


export const run = () => {
  const suit = onlys.length > 0 ? onlys : tests

  runBeforeAll()

  for (const test of suit) {
    runBeforeEach()

    try {
      test.cb?.()
      console.log(`success: ${test.name}`)
    } catch (error) {
      console.log(`error: ${error}`)
    }

    runAfterEach()
  }

  runAfterAll()
}
