import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//* Reminder: no toast is displayed if message is undefined or empty.
export const displayToastError = (message, closingTime = 3000) => {
	toast.error(message, {
		autoClose: closingTime,
	});
};

//* Reminder: no toast is displayed if message is undefined or empty.
export const displayToastSuccess = (message, closingTime = 3000) => {
	toast.success(message, {
		autoClose: closingTime,
	});
};
