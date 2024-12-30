import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const displayToastError = (messsage, closingTime = 3000) => {
	toast.error(messsage, {
		autoClose: closingTime,
	});
};

export const displayToastSuccess = (messsage, closingTime = 3000) => {
	toast.error(messsage, {
		autoClose: closingTime,
	});
};
