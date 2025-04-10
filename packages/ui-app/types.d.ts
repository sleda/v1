import { config } from '@x0/ui-config'

export type Conf = typeof config

declare module '@x0/ui-tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
