<main className="driver__nav-container">
				<section className="driver__signup-nav">
					<nav>
						<div className="nav-center">
							<div className="nav-header">
								<img src={rydgo_logo} className="logo" alt="logo" />
								<button
									className="nav-toggle"
									onClick={() => setShowLinks(!showLinks)}
								>
									<FaBars />
								</button>
							</div>

							<div className="links-container" >
								<ul className="links" >
									
								</ul>
							</div>

							<ul className="social-icons">
								
							</ul>
						</div>
					</nav>
				</section>

				{/* TEXT AND SIGN UP CARD CONTENT   */}

				<section className="card__signup-container">
					<div className="driver__signup-text">
						<h3>Your time. Your day.</h3>
						<h3>Your life.</h3>
						<p>Drive with Rydgo and be a Captain</p>
					</div>
				</section>
			</main>