<main className="driver__nav-container">
	<section className="driver__signup-nav">
		<div>
			{/* DRIVER LEFT CONTENT   */}
			<div className="driver__left-content">
				<div className="links__container">
					<img src={rydgo_logo} alt="rydgo" />
					<ul className="menu">
						<li className="link">
							<div className="flex gap-1">
								<h5>Discover</h5>
								<div className="mt-1">
									<RiArrowDownSFill />
								</div>
							</div>
							<ul className="submenu">
								<li>Get a rydgo</li>
								<li>How it works</li>
								<li>Fair estimator</li>
							</ul>
						</li>
						<li className="link">
							<div className="flex gap-1">
								<h5>Ride</h5>
								<div className="mt-1">
									<RiArrowDownSFill />
								</div>{" "}
							</div>
							<ul className="submenu">
								<li>Our cities</li>
								<li>Blog</li>
								<li>Press</li>
							</ul>
						</li>
						<li className="link">
							<h5>Help</h5>
						</li>
					</ul>
				</div>
				<div className="sign__in-btn">
					<button className="sign__in">Sign In</button>
					{/* HAMBURGER FOR SMALL SCREEN*/}
					<button className="hamburger">
						{isOpen === false ? (
							<GiHamburgerMenu className="icon" onClick={openSidebar} />
						) : (
							<FaTimes className="icon" onClick={closeSidebar} />
						)}
					</button>
				</div>
			</div>

			{/* DRIVER RIGHT CONTENT   */}

			<div className="driver__right-content"></div>
		</div>
	</section>

	{/* TEXT AND SIGN UP CARD CONTENT   */}

	<section className="card__signup-container">
		<div className="driver__signup-text">
			<h3>Your time. Your day.</h3>
			<h3>Your life.</h3>
			<p>Drive with Rydgo and be a Captain</p>
		</div>
	</section>
</main>;
