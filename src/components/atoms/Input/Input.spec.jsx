import React, {useState} from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'
import Input from './Input';

test('Change data event', () => {
    const onChange = jest.fn()
    render(
        <Input 
            onChange={onChange} 
            value="Data"
            placeholder='Data'
            icon='error'
            label='Label'
        />
    );

    expect(screen.getByTestId('InputId').value).toBe('Data');
    expect(screen.getByTestId('InputId').placeholder).toBe('Data');
    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(screen.getByTestId('IconInputId')).toBeInTheDocument();
    userEvent.type(screen.getByTestId('InputId'), 'Data');
    expect(onChange).toBeCalled();
});


const RenderInput = () => {
    const [state, setstate] = useState('');

    return(
        <Input 
            onChange={(e) => setstate(e.target.value)} 
            value={state} 
        />
    )
}

test('Change text event', () => {
      
    render(<RenderInput/>);

    expect(screen.getByTestId('InputId').value).toBe('');
    userEvent.type(screen.getByTestId('InputId'), 'Data');
    expect(screen.getByTestId('InputId').value).toBe('Data');
});