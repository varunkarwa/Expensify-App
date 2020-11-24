import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>INFO</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedContent) =>{
    return (props) => (
        <div>
            { props.isAdmin && <p>These are private info don't share!</p>}
            <WrappedContent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedContent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedContent {...props}/> : <p>Please Login first!</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details."/>,document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details."/>,document.getElementById("app"));