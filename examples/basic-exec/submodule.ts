import { prepareExecutable } from "@submodule/core"

export const { execute, prepare } = prepareExecutable({
  createConfig() {
    return { debug: Boolean(process.env.DEBUG) }
  },

  createServices({ config }) {
    return {
      log(...args: any[]) {
        if (config.debug) {
          console.log.apply(console, args)
        }
      }
    }
  },

})