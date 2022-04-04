import axios from 'axios';
const RegisterApp = () => {
    const addUser = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let age = e.target.age.value;
        let dob = e.target.dob.value;
        axios
            .post('/users/adduser', { name, email, password, age, dob })
            .then((res) => {
                if (res.data.status === 0) {
                    alert('Email already exists');
                } else {
                    alert('User added');
                }
            })
            .catch((e) => console.log(e));
    };
    return (
        <div>
            <form className='logform' onSubmit={addUser}>
                <h2>Registration Form</h2>
                <label>
                    <h5>Name</h5>
                </label>
                <input
                    required
                    type='text'
                    className='form-control'
                    placeholder='Enter your name'
                    name='name'
                />
                <label>
                    <h5>Email</h5>
                </label>
                <input
                    required
                    type='text'
                    className='form-control'
                    placeholder='email..'
                    name='email'
                />
                <label>
                    <h5>Password</h5>
                </label>
                <input
                    required
                    type='password'
                    className='form-control'
                    name='password'
                    placeholder='password..'
                />
                <label>
                    <h5>age</h5>
                </label>
                <input
                    required
                    type='number'
                    max='120'
                    min='0'
                    name='age'
                    placeholder='age'
                    className='form-control'
                />
                <label>
                    <h5>Date of Birth</h5>
                </label>
                <input
                    required
                    type='date'
                    className='form-control'
                    placeholder='dob'
                    name='dob'
                />
                <button >Register user</button>
            </form>
        </div>
    );
};
export default RegisterApp;