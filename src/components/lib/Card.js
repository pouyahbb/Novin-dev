import React from 'react'
// Materail
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
})

export const CardComponent = ({
	avatar,
	firstName,
	lastName,
	email,
	haveButton,
	buttonText,
	buttonClickHandler,
	showLastName,
}) => {
	const classes = useStyles()
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={avatar} title={firstName} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{firstName} {showLastName && ' - ' + lastName}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{email}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				{haveButton && (
					<Button onClick={buttonClickHandler} size='small' color='primary'>
						{buttonText}
					</Button>
				)}
			</CardActions>
		</Card>
	)
}

export default CardComponent
