const About=(props)=>{
    return(
        <section>
            <h2>THIS IS ABOUT PAGE</h2>
            <h3>I am studying in {props.college},Perundurai.</h3>
            <h3 >OTHER COLLEGES:{props.college1},{props.college2},{props.college3}</h3>
        </section>
    );
}
export default About;