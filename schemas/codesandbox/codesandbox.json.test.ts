import { Validator } from 'jsonschema'
import { JsonObject } from 'type-fest'
import testCases from './test-cases.json'
import schema from './codesandbox.json'

describe('codesandbox', () => {
  let validator: Validator

  beforeEach(() => {
    validator = new Validator()
  })

  test.each(Object.keys(testCases) as (keyof typeof testCases)[])(
    '%s is correct schema',
    (name: keyof typeof testCases) => {
      const result = validator.validate(testCases[name], schema)
      expect(result.valid).toBeTruthy()
    }
  )
})
