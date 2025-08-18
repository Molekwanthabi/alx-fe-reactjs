import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Controlled Components Form */}
      <RegistrationForm />

      {/* Divider */}
      <div className="my-10 text-center">
        <hr className="border-gray-300" />
        <span className="bg-gray-50 px-4 text-gray-500">OR</span>
      </div>

      {/* Formik Form */}
      <FormikForm />
    </div>
  );
}

export default App;
