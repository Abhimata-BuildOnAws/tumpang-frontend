import {useState, useEffect} from 'react'
import Header from '../../components/dashboard/Header'
import { useHistory } from "react-router"
import { Auth } from 'aws-amplify';
import axios from 'axios';

const Settings = () => {

    const [name, setName] = useState('Arvin Aik')
    const [treePoints, setTreePoints] = useState(17000);

    const history = useHistory();

    const setUserData = async() => {
        try{
            const { attributes } = await Auth.currentAuthenticatedUser();
            const userId = attributes.sub;
            const user = await axios.post(`/user/get_user`, {user_id: userId});
            // set user attributes
            setName(user.data.name);
            setTreePoints(user.data.tree_points);
        }
        catch(e){
            history.push('/login')
            console.log(e);
        }
    };
    useEffect(() => {
        setUserData();
    }, []);

    return (
        <>
            <Header pageTitle="Settings" name={name} treePoints={treePoints} />
        </>
)
}

export default Settings
