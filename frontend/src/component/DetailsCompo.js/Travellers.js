import { Formik, Form, Field, ErrorMessage } from 'formik';
import { setFinalBookingDetails } from "../../slicer/slicer";
import { useDispatch, useSelector } from 'react-redux';

const Travellers = ({ bookedSeats }) => {

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);

  let form;
  if (bookedSeats) {
    form = bookedSeats;
  }

  const handelSubmit = (values , action) => {
    dispatch(setFinalBookingDetails(values));
    let arr = values.userForm
    action.resetForm();
    fetch('http://localhost:4000/api/booking-details', {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(arr)
    });
  };

  return (
    <div>
      {
        form ?
          <div>
            <Formik
              initialValues={{ userForm: form.map((user) => (
                                { account : userName,
                                  name: '',
                                  gender: 'male',
                                  age: '',
                                  email: '',
                                  mobile: '',
                                  seat : user.seat }
                ))
              }}
              onSubmit={handelSubmit} >
              {
                (formik) => (
                  <>
                    <Form className='space-y-4 mt-2'>
                      {
                        formik.values.userForm.map((ele, i) => (
                          <section key={i} className='border-2 rounded-md p-6 space-y-4'>
                            <h1 className='text-slate-600 font-medium text-xl'>Passanger {i + 1} , Seat No : {bookedSeats[i].seat}</h1>

                            <div className='flex flex-col space-y-6'>
                              <div className='flex font-medium space-x-6'>

                                <div className='flex flex-col space-y-2 text-slate-600'>
                                  <label>Name</label>
                                  <Field className='border border-slate-300 text-slate-600 p-1 rounded-md'
                                    type='text' name={`userForm[${i}].name`} />
                                </div>

                                <div className='flex flex-col space-y-2 text-slate-600'>
                                  <label>Gender</label>
                                  <Field className='border border-slate-300 text-slate-600 p-1 rounded-md'
                                    as='select' name={`userForm[${i}].gender`}>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                    <option value='other'>Other</option>
                                  </Field>
                                </div>

                                <div className='flex flex-col space-y-2 text-slate-600'>
                                  <label>Age</label>
                                  <Field className='border border-slate-300 text-slate-600 p-1 rounded-md'
                                    type='number' name={`userForm[${i}].age`} />
                                </div>

                              </div>

                              <div className='flex space-x-6 font-medium text-slate-600'>
                                <div className='flex flex-col'>
                                  <label>Email</label>
                                  <Field className='border border-slate-300 text-slate-600 p-1 rounded-md'
                                    type='email' name={`userForm[${i}].email`} />
                                </div>

                                <div className='flex flex-col'>
                                  <label>Mobile No.</label>
                                  <Field className='border border-slate-300 text-slate-600 p-1 rounded-md'
                                    type='number' name={`userForm[${i}].mobile`} />
                                </div>
                              </div>
                            </div>
                          </section>
                        ))
                      }
                      <div className='flex justify-center'>
                        <button type='submit'
                          className='font- medium bg-gray-500 px-6 py-1 rounded-sm text-white shadow-xl'>
                          Submit
                        </button>
                      </div>
                    </Form>
                  </>
                )
              }

            </Formik>
          </div> : null
      }
    </div>
  )
}

export default Travellers

