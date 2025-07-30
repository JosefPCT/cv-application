import '../styles/Home.css'

export function Home({ onSubmit }){



  return (
    <div>
        <h1>Create your CV now!</h1>
        <button onClick={onSubmit}>Next</button>
    </div>
  );
}