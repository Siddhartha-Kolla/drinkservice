import './LoginComponent.css'
import LoginSection from './LoginSection';
import SignUpComponent from './SignUpComponent';

function LoginComponent() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] fullscreen">
      <LoginSection/>
      <div className="hidden bg-muted lg:block">
        <img
          src='img/coca-cola.jpg'
          alt="Image"
          className="w-full object-cover dark:brightness-[0.2] dark:grayscale fullscreen"
        />
      </div>
    </div>
  )
}


export default LoginComponent;