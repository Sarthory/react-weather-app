import React from 'react';

const Form = props => (
    <div>
        <form onSubmit={props.getWeather}>

            <div className="form-fields">
                <input name="city" type="text" placeholder="City..."/><br/>
                <input name="country" type="text" placeholder="Country..."/><br/>
                <button>GO</button>
            </div>
        </form>
    </div>
);

export default Form;