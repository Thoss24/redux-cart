import classes from './Notification.module.css'

const Notification = (props) => {

    let errorClass = ''

    if (props.title === 'Pending') {
        errorClass = classes.pending
    }

    if (props.title === 'Error') {
        errorClass = classes.error
    }

    if (props.title === 'Success') {
        errorClass = classes.success
    }

    let finalError = `${classes.container} ${errorClass}`

    return (
        <div className={finalError}>
            <h1>{props.title}</h1>
            <h2>{props.message}</h2>
        </div>
    )
};

export default Notification