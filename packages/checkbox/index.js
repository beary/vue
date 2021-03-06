import Checkbox from './checkbox'
import CheckboxGroup from './checkbox_group'

Checkbox.install = vue => {
  vue.component(Checkbox.name, Checkbox)
  vue.component(CheckboxGroup.name, CheckboxGroup)
}

export default Checkbox
