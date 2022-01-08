import { Link } from "react-router-dom";

const ErrorCard = ({errorMsg})=> {
    return (
        
            <div style={{
                textAlign: 'center',
                paddingTop: '50px',
                position: '',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                zIndex: '10000',
                background: '#000',
                color: 'yellow',
            }}>
                <h2 style={{
                fontSize: '50px'
            }}>Page not found</h2>
                <Link to='/' style={{
                fontSize: '30px'
            }}>Go to main page</Link>
        </div>
    );
};

export function withError (Wrapped) {
    console.log(2);
    return ({errorMsg, ...props}) => {
        console.log(3);
        return errorMsg ? <ErrorCard errorMsg={errorMsg}/>
        : <Wrapped {...props}/>
    };
}