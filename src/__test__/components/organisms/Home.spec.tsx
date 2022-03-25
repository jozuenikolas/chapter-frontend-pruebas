import { shallow, ShallowWrapper } from 'enzyme'
import Home from '@organisms/Home'

describe('Home Component', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = shallow(
      <Home/>
    )
  })

  test('Should render HomeWrapper', () => {
    expect(wrapper.find('styles__HomeWrapper').length).toBe(1)
  })
})
