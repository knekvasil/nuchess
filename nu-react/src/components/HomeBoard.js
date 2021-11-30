// HomeBoard.js
import "./HomeBoard.css";

function HomeBoard() {
	return (
		<div className="homeboard">
			<header className="masthead">
				<div className="container px-4 px-lg-5 h-100">
					<div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
						<div className="col-lg-8 align-self-end">
							<h1 className="text-white font-weight-bold">
								Your Favorite Social Web Service for Chess Game Aggregation
							</h1>
							<hr className="divider" />
						</div>
						<div className="col-lg-8 align-self-baseline">
							<p className="text-white mb-5">
								nuchess is making the world a better place through CRUD-based,
								distributive application structures to communicate between
								endpoints; revolutionizing community-based chess game
								aggregation as you know it.
							</p>
							<p className="text-white mb-5">
								Just create an account to start sharing, no strings attached!
							</p>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default HomeBoard;
