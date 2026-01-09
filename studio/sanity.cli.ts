import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'kdkap5or',
    dataset: 'production',
  },
  deployment: {
    autoUpdates: true,
  },
})
