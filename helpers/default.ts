//-- add when vuetify installed
import { DefaultsInstance } from 'vuetify/lib/framework.mjs'

export const defaults: DefaultsInstance = {
  VAppBar: {
    elevation: 0,
  },
  VBtn: {
    color:'primary',
    variant: 'flat',
    height: 38,
    rounded: 'lg',
    size: 'small',
  },
  VTextField: {
    color: 'primary',
    variant: 'outlined',
    density: 'comfortable',
  },
}
//-- add when vuetify installed