import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const CurrencyConverter = () => {

	const [radioValue, setRadioValue] = React.useState("euros");
	const [input, setInput] = React.useState(0);
	const [amount, setAmount] = React.useState(0);

	const [locale, setLocale] = React.useState('en-UK');
	const df = new Intl.DateTimeFormat(locale, {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'});
	const cf = new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR' });

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	const handleRadioChange = (event) => {
		setRadioValue(event.target.value);

		if (radioValue === "pounds") {
			setAmount(1.15 * input);
			setLocale('en-UK');
		} else {
			setAmount(0.87 * input);
			setLocale('fi-FI');
		}
	}

	return (
		<Box border={1} maxWidth={500} minWidth={250} p={1}>
			<Typography>Exchange rate at</Typography>
			<Typography>{df.format(new Date())}</Typography>
			<Box display="flex" flexDirection="row">
				<Input onChange={handleChange}></Input>
				<Typography>= {cf.format(amount)}</Typography>
			</Box>
            <Box>
				<Typography>Direction:</Typography>
				<RadioGroup value={radioValue} onChange={handleRadioChange}>
					<FormControlLabel value="euros" control={<Radio />} label="€ to £" />
					<FormControlLabel value="pounds" control={<Radio />} label="£ to €" />
				</RadioGroup>
			</Box>
		</Box>
	);
}

export default CurrencyConverter;
