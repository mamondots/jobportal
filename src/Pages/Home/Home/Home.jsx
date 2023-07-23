import AdvanceJobs from "../AdvanceJobs/AdvanceJobs";
import Banner from "../Banner/Banner";
import BestOffer from "../BestOffer/BestOffer";
import JobPost from "../JobPost/JobPost";
import Jobs from "../Jobs/Jobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BestOffer></BestOffer>
            <JobPost></JobPost>
            <Jobs></Jobs>
            <AdvanceJobs></AdvanceJobs>
        </div>
    );
};

export default Home;