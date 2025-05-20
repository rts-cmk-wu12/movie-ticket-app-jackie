  import "../style/search.scss";
   export default function Header() {



    return (
        <>

    <header>
      <div>
      <p className="welcomeHeading">Welcome back</p>
     <p className="welcomeHeading">Dig</p>
      </div>
      <img className="profile_placeholder" src="src/Profile_avatar_placeholder_large.png" alt="" />
      <nav className="search-section" >
        <form >
            <input className="signup-form__input" placeholder="Search"/>
        </form>
        
      </nav>
    </header>
    

        </>
    );
} 
