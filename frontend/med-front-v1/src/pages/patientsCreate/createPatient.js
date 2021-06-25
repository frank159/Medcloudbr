import Button from '@material-ui/core/Button'
import { InputsContainer, Text} from "./Styled";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm"
import axios from "axios"
import BASE_URL from '../../constants/urls';
import { goToPatientFeed } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import GlobalStateContext from '../../global/GlobalStateContext';
import { useContext } from 'react';

export const CreatePatient = () => {
    const history = useHistory()
    const { requests } = useContext(GlobalStateContext);

    const [form, onChange] = useForm({name: "", email: "", age: "", birthday: "", 
    historic: "", mothersName: "", entrance: "", released: "",})

    const createPatient = () => {
        axios.post(`${BASE_URL}/user/signup`, form,)
        .then((res)=>{
            alert("Adicionado com sucesso")
            requests.getPatient()
            goToPatientFeed(history)
        })
        .catch((err)=> alert(err))
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPatient()
    }

    return(
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"name"}
                    value={form.name}
                    label={"patient's name"}
                    onChange={onChange}
                    variant={"filled"}
                    fullWidth
                    margin={"normal"}
                    type={"name"} 
                />
                <TextField
                    name={"email"}
                    value={form.email}
                    label={"patient email"}
                    onChange={onChange}
                    variant={"filled"}
                    fullWidth
                    margin={"normal"}
                    type={"email"} 
                />
                <TextField
                    name={"age"}
                    value={form.age}
                    label={"patient age"}
                    onChange={onChange}
                    variant={"filled"}
                    fullWidth
                    margin={"normal"}
                    type={"number"} 
                />

                <Text>patient's birthday:</Text>
                <TextField
                    name={"birthday"}
                    value={form.birthday}
                    label={""}
                    onChange={onChange}
                    variant={"filled"}
                    fullWidth
                    margin={"normal"}
                    type={"date"} 
                />
                <TextField
                    name={"historic"}
                    value={form.historic}
                    label={"patient history"}
                    onChange={onChange}     
                    variant={"filled"}
                    fullWidth
                    margin={"normal"}
                    type={"text"} 
                />
                <TextField
                    name={"mothersName"}
                    value={form.mothersName}
                    label={"patient's mother's name"}
                    onChange={onChange}
                    variant={"filled"}
                    fullWidth
                    margin={"normal"}
                    type={"text"} 
                />
                <Text>patient entrance:</Text>
                <TextField
                    name={"entrance"}
                    value={form.entrance}
                    label={""}
                    onChange={onChange}
                    variant={"filled"}
                    fullWidth
                    margin={"normal"}
                    type={"date"} 
                />
                <Text>patient exit:</Text>
                <TextField
                    name={"released"}
                    value={form.released}
                    label={""}
                    onChange={onChange}
                    variant={"filled"}
                    fullWidth
                    margin={"normal"}
                    type={"date"} 
                />
                <Button
                type={"submit"}
                fullWidth
                variant={"contained"}
                color={"primary"}
                >to add
                </Button>  
            </form>
        </InputsContainer>
        )
}