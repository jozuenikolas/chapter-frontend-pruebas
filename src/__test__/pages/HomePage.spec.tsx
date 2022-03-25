import { shallow, ShallowWrapper } from 'enzyme'
import HomePage from '../../pages'

describe('HomePage Component', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = shallow(
      <HomePage/>
    )
  })

  test('Should render Home', () => {
    expect(wrapper.find('Home').length).toBe(1)
  })
})
