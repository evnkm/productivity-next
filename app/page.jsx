import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Trace
            <br classname="max-md:hidden" />
            <span className="orange_gradient text-center">Personalized Productivity</span>
        </h1>
        <p className="desc text-center">
            Trace is a personalized productivity tool that helps you achieve your goals and reach new productivity peaks.
        </p>

        <Feed />
    </section>
  )
}

export default Home