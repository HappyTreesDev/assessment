import Button from "../components/button";

export default function ExistingGoals() {
	return (
		<>
			<h1>Existing Goals</h1>
			<Button title={'Create New Goal'} />
		</>
	);
}

export async function getServerSideProps(context) {
	return {}
}