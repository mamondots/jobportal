import AdvanceJobs from "../AdvanceJobs/AdvanceJobs";
import AvabileJobs from "../AvabileJobs/AvabileJobs";
import Banner from "../Banner/Banner";
import BestOffer from "../BestOffer/BestOffer";
import Blogs from "../Blogs/Blogs";
import Candidet from "../Candidet/Candidet";
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
            <AvabileJobs></AvabileJobs>
            <Candidet></Candidet>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;