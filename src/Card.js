import React from 'react';

const Card = ({name, email, id}) => {
	return (
		<div className='bg-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id+99}?200x200`} alt='robot' />
			<div>
				<h2> {name} </h2>
				<p> {email} </p>
			</div>
		</div>
		);
}

export default Card;