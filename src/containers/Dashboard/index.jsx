import Header from '../../components/Header/index';
import Movie from '../../components/Movie/index';
import "../../App.css";

const Dashboard = () => {
    return (
        <>
            <div className='App'>
                <Header text='Romantic Comedy' />
                <div className='movies'>
                    <Movie />
                </div>
            </div>
        </>
    )
};

export default Dashboard;