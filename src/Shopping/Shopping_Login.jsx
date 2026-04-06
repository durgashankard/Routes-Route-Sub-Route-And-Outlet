
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom"


export function Shopping_Login() {

    let navigate = useNavigate();

    const formik = useFormik(
        {
            initialValues: {
                userName: "",
                password: ""
            },
            onSubmit: (user) => {
                if (user.password === 'Admin') {
                    navigate('/home');
                } else {
                    alert('Password is wrong, so Please Try Again..')
                }
            }

        }
    )


    return (
        <div className=" container-fluid">
            <form onSubmit={formik.handleSubmit} action="">
                <dl>
                    <dt>User Name </dt>
                    <dd><input type="text" onChange={formik.handleChange} name="userName" id="" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="password" id="" /></dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}