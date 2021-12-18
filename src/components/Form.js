import React from 'react';

const Form = (props) => {

    const {change, submit} = props;
    const {username, size, checked, instructions} = props.values;
    const onChange = (e) => {
        const {name, value, checked, type} = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <div>
            <h1>Pizza!</h1>
             
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                        type='text'
                        name='name'
                        value={username}
                        onChange={onChange}
                    />
                </label>
                <label>Size:
                <input
                        type='dropdown'
                        name='size'
                        value={size}
                        onChange={onChange}
                    />
                </label>
                <label>Toppings:
                <input
                        type='checkbox'
                        name='pepperoni'
                        checked={checked}
                        
                        onChange={onChange}
                    />
                    <input
                        type='checkbox'
                        name='mushrooms'
                        checked={checked}
                        onChange={onChange}
                    />
                    <input
                        type='checkbox'
                        name='tomatoes'
                        checked={checked}
                        onChange={onChange}
                    />
                    <input
                        type='checkbox'
                        name='anchovies'
                        checked={checked}
                        onChange={onChange}
                    />
                </label>
                
                <label>Instructions:
                <input
                        type='text'
                        name='instructions'
                        value={instructions}
                        onChange={onChange}
                    />
                </label>
                <input type='submit' value='Submit Pizza'
                />
            </form>
        </div>
    )
}

export default Form;