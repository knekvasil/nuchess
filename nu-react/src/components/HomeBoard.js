// HomeBoard.js
import "./HomeBoard.css";

function HomeBoard() {
	return (
		<header className="masthead">
			<div className="container px-4 px-lg-5 h-100">
				<div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
					<div className="col-lg-8 align-self-end">
						<h1 className="text-white font-weight-bold">
							Your Favorite Place for Social Chess Game Aggregation
						</h1>
						<hr className="divider" />
					</div>
					<div className="col-lg-8 align-self-baseline">
						<p className="text-white mb-5">
							nuchess helps you share your chess games with other users! Just
							create an account to start, no strings attached!
						</p>
					</div>
				</div>
			</div>
		</header>
	);
}

export default HomeBoard;
