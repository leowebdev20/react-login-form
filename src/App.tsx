import React, {useState} from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

enum SourceEnum {youtube, facebook}

interface FormData {
  email: string
  password: string
  source: SourceEnum
  remember: boolean
}

function App() {
  const { register, handleSubmit, errors } = useForm<FormData>({mode: "onChange"});
// const myRef = React.useRef<HTMLDivElement>(null);

  const onSubmit = handleSubmit(({email, password, source, remember}) => {
    console.log(email, password, source, remember);
  })

  return (
     <div className="min-h-screen bg-gray-200 flex flex-col justify-center">
       <div className="max-w-md w-full mx-auto">
         <div className="text-center font-medium text-xl">Welcome to my website!</div>
         <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Pleae log in 🍑</div>
       </div>
       <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
         <form action="" className="space-y-6" onSubmit={onSubmit}>
           <div>
             <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
             <input 
             ref={register({
               required: true,
               minLength: 2,
               maxLength: 7
             })}
             style={{borderColor: errors.email? "red" : ""}}
             name="email"
             type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
             {errors.email && "Email is invalid"}
           </div>
           <div>
             <label htmlFor="" className="text-sm font-bold text-gray-600 block">Password</label>
             <input
              ref={register({
                required: true,
                minLength: 6,
                maxLength: 20
              })}
             name="password"
              type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
           </div>
           <div>
             <label htmlFor="" className="text-sm font-bold text-gray-600 block">Source</label>
             <select 
             ref={register({
              required: true
            })}
             name="source"
              id="" className="w-full p-2 border border-gray-300 rounded mt-1">
               <option value="youtube">Youtube</option>
               <option value="facebook">Facebook</option>
             </select>
           </div>
           <div className="flex items-center justify-between">
             <div className="flex items-center">
               <input 
               ref={register()}
               name="remember"
               type="checkbox" className="h-4 w-4 text-blue-500 rounded" />
               <label htmlFor="" className="ml-2 text-sm text-gray-800">Remember me?</label>
             </div>
             <div>
               <a href="" className="font-medium text-sm text-blue-500">I forgot my password</a>
             </div>
           </div>
           <div>
             <button className="w-full py-2 px-4 bg-blue-400 hover:bg-blue-600 rounded-md text-white text-sm">Log In</button>
           </div>
         </form>
       </div>

     </div>
  );
}

export default App;
