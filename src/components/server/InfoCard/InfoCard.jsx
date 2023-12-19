import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

const CardColors = ['success', 'error', 'warning', 'info'];

/**
 * Gets the events from the GDSC (bevy) API and displays them in a card format.
 * The card has a clickable button that redirects to the event's page.
 *
 * NOTE: because this component is a Server Component, we pass the <a> tag, which means that
 * we cannot use Next.js' Link component. This means that we cannot use the Next.js router
 *
 * @property {string} subtitle the subtitle of the event appearing above the title
 * @property {string} title the title of the event
 * @property {string} href the url of the event
 * @property {string} description the description of the event
 * @property {number} lines the number of lines to show in the description
 * @property {string} linkText the text to show on the button
 * @property {boolean} external whether the link is external or not, i.e., whether to open in a new tab or not
 */
export const InfoCard = ({
	subtitle,
	title,
	href,
	description,
	lines = 4,
	linkText = 'View Details',
	external = true,
}) => {
	return (
		<Card
			sx={{
				borderRadius: '2em',
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				transition: 'all .3s',
				'&:hover': {
					transform: 'translateY(-5px)'
				}
			}}
		>
			<CardContent sx={{ flexGrow: 1, paddingBottom: '0' }}>
				<Typography gutterBottom variant="h6" component="p">
					{subtitle}
				</Typography>

				<Typography gutterBottom variant="h5" component="h2" fontWeight="bold">
					{title}
				</Typography>

				<Typography
					sx={{
						display: '-webkit-box',
						maxWidth: '100%',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						WebkitBoxOrient: 'vertical',
						WebkitLineClamp: lines,
					}}
				>
					{description}
				</Typography>
			</CardContent>

			<CardActions sx={{ padding: '16px' }}>
				<Button
					color={CardColors[(subtitle?.length + title?.length + description?.length) % CardColors.length]}
					component={'a'}
					href={href}
					rel={external ? 'noopener noreferrer' : undefined}
					size="small"
					sx={{ borderRadius: '2em', textTransform: 'none' }}
					target={external ? '_blank' : undefined}
					variant="contained"
				>
					{linkText}
					<OpenInNew
						fontSize="inherit"
						color="inherit"
						titleAccess="Opens in new tab"
						sx={{
							height: '0.8em',
							marginLeft: '0.3em',
							opacity: 0.8,
							width: '0.8em',
							'&:hover': {
								opacity: 1,
							},
						}}
					/>
				</Button>
			</CardActions>
		</Card>
	);
};
