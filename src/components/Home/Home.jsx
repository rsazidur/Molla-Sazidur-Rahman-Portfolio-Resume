import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
	useEffect(() => {
		// Simulating the completion of loading (replace this with your actual loading logic)
		setTimeout(() => {
		  document.querySelector('.nero_tm_preloader').style.display = 'none';
		}, 2000);
	  }, []);
  return (
    <>

{/*-- WRAPPER ALL --*/}
<div class="nero_tm_wrapper_all">

	<div id="nero_tm_popup_blog">
		<div class="container">
			<div class="inner_popup scrollable"></div>
		</div>
		<span class="close"><a href="#"></a></span>
	</div>
	
	{/* -- PRELOADER -- */}
	<div class="nero_tm_preloader">
		<div class="spinner_wrap">
			<div class="spinner"></div>
		</div>
	</div>
	{/* -- PRELOADER -- */}
	
	{/* -- MOBILE MENU -- */}
	<div class="nero_tm_mobile_header_wrap">
		<div class="main_wrap">
			<div class="logo">
				<a href="index.html"><img src="assets/img/logo/mobile_logo.png" alt="mobile_logo" /></a>
			</div>
			<div class="nero_tm_trigger">
				<div class="hamburger hamburger--collapse-r">
					<div class="hamburger-box">
						<div class="hamburger-inner"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="nero_tm_mobile_menu_wrap">
   			<div class="mob_menu">
				<ul class="anchor_nav">
					<li><Link to="/">Home</Link></li>
					<li><Link to="about">About</Link></li>
					<li><Link to="services">Services</Link></li>
					<li><Link to="portfolio">Portfolio</Link></li>
					<li><Link to="news">News</Link></li>
					<li><Link to="contact">Contact</Link></li>
				</ul>
			</div>
		</div>
	</div>
	{/* -- /MOBILE MENU -- */}
	
    {/* -- CONTENT -- */}
	<div class="nero_tm_content">
		
		{/* -- LEFTPART -- */}
		<div class="nero_tm_leftpart_wrap">
			<div class="leftpart_inner">
				<div class="logo_wrap">
					<a href="#"><img src="assets/img/logo/desktop-logo.png" alt="desktop-logo" /></a>
				</div>
				<div class="menu_list_wrap">
					<ul class="anchor_nav">
						<li><Link to="/">Home</Link></li>
						<li><Link to="about">About</Link></li>
						<li><Link to="services">Services</Link></li>
						<li><Link to="portfolio">Portfolio</Link></li>
						<li><Link to="news">News</Link></li>
						<li><Link to="contact">Contact</Link></li>
					</ul>
				</div>
				<div class="leftpart_bottom">
					<div class="social_wrap">
						<ul>
							<li><a href="#"><i class="xcon-facebook"></i></a></li>
							<li><a href="#"><i class="xcon-twitter"></i></a></li>
							<li><a href="#"><i class="xcon-linkedin"></i></a></li>
							<li><a href="#"><i class="xcon-instagram"></i></a></li>
							<li><a href="#"><i class="xcon-behance"></i></a></li>
						</ul>
					</div>
				</div>
				<a class="nero_tm_resize" href="#"><i class="xcon-angle-left"></i></a>
			</div>
		</div>
		{/* -- /LEFTPART -- */}
		
		{/* -- RIGHTPART -- */}
		<div class="nero_tm_rightpart">
			<div class="rightpart_inner">
				<div class="nero_tm_section" id="home">
					<div class="nero_tm_hero_header_wrap">
						<div class="nero_tm_universal_box_wrap">
							<div class="bg_wrap">
								<div class="overlay_image hero jarallax" data-speed="0.1"></div>
								<div class="overlay_color hero"></div>
							</div>
							<div class="content hero">
								<div class="inner_content">
									<div class="image_wrap">
										<img src="assets/img/hero/img.jpg" alt="hero" />
									</div>
									<div class="name_holder">
										<h3>Alan <span>Michaelis</span></h3>
									</div>
									<div class="text_typing">
										<p>I'm a <span class="nero_tm_animation_text_word"></span></p>
									</div>
								</div>
							</div>
							<div class="nero_tm_arrow_wrap bounce anchor">
								<a href="#about"><i class="xcon-angle-double-down"></i></a>
							</div>
						</div>
					</div>
				</div>
				
				{/* -- ABOUT -- */}
				<div class="nero_tm_section relative" id="about">
					<div class="nero_tm_about_wrapper_all">
						<div class="container">
							<div class="nero_tm_title_holder">
								<h3>About Me</h3>
								<span>Main informations about me</span>
							</div>
							<div class="nero_tm_about_wrap">
								<div class="author_wrap">
									<div class="leftbox">
										<div class="about_image_wrap parallax" data-relative-input="true">
											<div class="image layer" data-depth="0.1">
												<img src="assets/img/about/550x640.jpg" alt="550x640" />
												<div class="inner" data-img-url="assets/img/about/1.jpg"></div>
											</div>
											<div class="border layer" data-depth="0.2">
												<img src="assets/img/about/550x640.jpg" alt="550x640" />
												<div class="inner"></div>
											</div>
										</div>

									</div>
									<div class="rightbox">
										<div class="nero_tm_mini_title_holder">
											<h4>I'm Alan Michaelis and <span class="nero_tm_animation_text_word"></span></h4>
										</div>
										<div class="definition">
											<p>Hi! My name is <strong>Alan Michaelis</strong>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.</p>
										</div>
										<div class="about_short_contact_wrap">
											<ul>
												<li>
													<span><label>Birthday:</label> 01.07.1990</span>
												</li>
												<li>
													<span><label>Age:</label> 28</span>
												</li>
												<li>
													<span><label>City:</label> New York, USA</span>
												</li>
												<li>
													<span><label>Interests:</label> Soccer, UFC</span>
												</li>
												<li>
													<span><label>Study:</label> Chicago University</span>
												</li>
												<li>
													<span><label>Degree:</label> Master</span>
												</li>	
												<li>
													<span><label>Website:</label> <a href="#">www.mywebsite.com</a></span>
												</li>
												<li>
													<span><label>Mail:</label> <a href="mailto:example@gmail.com">mymail&#64;gmail.com</a></span>
												</li>
												<li>
													<span><label>Phone:</label> <a href="#">+77 022 177 05 05</a></span>
												</li>
												<li>
													<span><label>Twitter:</label> <a href="#">&#64;myusername</a></span>
												</li>
											</ul>
										</div>
										<div class="buttons_wrap">
											<ul>
												<li>
													<a href="index.html"><span>Download CV</span></a>
												</li>
												<li class="anchor">
													<a href="#contact"><span>Send Message</span></a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* -- /ABOUT -- */}
				
				{/* -- SKILLS -- */}
				<div class="nero_tm_section">
					<div class="nero_tm_skills_wrap">
						<div class="container">
							<div class="inner_wrap">
								<div class="leftbox">
									<div class="nero_tm_mini_title_holder">
										<h4>Some About my Abilities</h4>
									</div>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply.</p>
								</div>
								<div class="rightbox">
									<div class="progress_bar_wrap_total">
										<div class="nero_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
											<div class="nero_tm_progress" data-value="95" data-color="#000">
												<span><span class="label">Wordpress - <span class="experience">5 years of experience</span></span><span class="number">95%</span></span>
												<div class="nero_tm_bar_bg"><div class="nero_tm_bar_wrap"><div class="nero_tm_bar"></div></div></div>
											</div>
											<div class="nero_tm_progress" data-value="85" data-color="#000">
												<span><span class="label">Css - <span class="experience">3 years of experience</span></span><span class="number">85%</span></span>
												<div class="nero_tm_bar_bg"><div class="nero_tm_bar_wrap"><div class="nero_tm_bar"></div></div></div>
											</div>
											<div class="nero_tm_progress" data-value="75" data-color="#000">
												<span><span class="label">HTML - <span class="experience">4 years of experience</span></span><span class="number">75%</span></span>
												<div class="nero_tm_bar_bg"><div class="nero_tm_bar_wrap"><div class="nero_tm_bar"></div></div></div>
											</div>
											<div class="nero_tm_progress" data-value="90" data-color="#000">
												<span><span class="label">After Effect - <span class="experience">6 years of experience</span></span><span class="number">90%</span></span>
												<div class="nero_tm_bar_bg"><div class="nero_tm_bar_wrap"><div class="nero_tm_bar"></div></div></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* -- /SKILLS -- */}
				
				{/* -- SERVICES -- */}
				<div class="nero_tm_section" id="services">
					<div class="nero_tm_services_wrap">
						<div class="container">
							<div class="nero_tm_title_holder">
								<h3>Amazing Services</h3>
								<span>Meet our amazing services</span>
							</div>
							<div class="list_wrap">
								<ul>
									<li>
										<div class="inner">
											<div class="icon">
												<img class="svg" src="img/svg/camera-diaphragm.svg" alt="camera-diaphragm" />
											</div>
											<div class="title_service">
												<h3>Photography</h3>
											</div>
											<div class="text">
												<p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
											</div>
										</div>
									</li>
									<li>
										<div class="inner">
											<div class="icon">
												<img class="svg" src="img/svg/new-tab.svg" alt="new-tab" />
											</div>
											<div class="title_service">
												<h3>Web Design</h3>
											</div>
											<div class="text">
												<p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
											</div>
										</div>
									</li>
									<li>
										<div class="inner">
											<div class="icon">
												<img class="svg" src="img/svg/layers.svg" alt="layers" />
											</div>
											<div class="title_service">
												<h3>Branding</h3>
											</div>
											<div class="text">
												<p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
											</div>
										</div>
									</li>
									<li>
										<div class="inner">
											<div class="icon">
												<img class="svg" src="img/svg/share.svg" alt="share" />
											</div>
											<div class="title_service">
												<h3>Social Media</h3>
											</div>
											<div class="text">
												<p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
											</div>
										</div>
									</li>
									<li>
										<div class="inner">
											<div class="icon">
												<img class="svg" src="img/svg/adobe-illustrator.svg" alt="adobe-illustrator" />
											</div>
											<div class="title_service">
												<h3>Illustrator</h3>
											</div>
											<div class="text">
												<p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
											</div>
										</div>
									</li>
									<li>
										<div class="inner">
											<div class="icon">
												<img class="svg" src="img/svg/seo-performance-marketing-graphic.svg" alt="seo-performance-marketing-graphic" />
											</div>
											<div class="title_service">
												<h3>Marketing</h3>
											</div>
											<div class="text">
												<p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* -- /SERVICES -- */}
				
				{/* -- PORTFOLIO -- */}
				<div class="nero_tm_section relative" id="portfolio">
					<div class="nero_tm_portfolio_wrapper_all">

						{/* -- PORTFOLIO FILTER -- */}
						<div class="nero_tm_second_portfolio">
						<div class="container">
							<div class="nero_tm_portfolio_wrap">
								<div class="nero_tm_title_holder portfolio">
									<h3>Creative Works</h3>
									<span>Check out our latest creative works</span>
								</div>
								<div class="nero_tm_portfolio_titles"></div>
								<ul class="nero_tm_portfolio_filter">
									<li><a href="#" class="current" data-filter="*">All</a></li>
									<li><a href="#" data-filter=".design">Design</a></li>
									<li><a href="#" data-filter=".photography">Photography</a></li>
									<li><a href="#" data-filter=".development">Development</a></li>
								</ul>
								<ul class="nero_tm_portfolio_list gallery_zoom">
									<li class="design">
										<div class="entry nero_tm_portfolio_animation_wrap" data-title="Aoc Productions" data-category="Design">
											<a href="portfolio-single.html">
												<img src="img/portfolio/600x600.jpg" alt="600x600" />
												<div class="nero_tm_portfolio_image_main" data-img-url="img/portfolio/1.jpg"></div>
											</a>
										</div>
									</li>
									<li class="photography">
										<div class="entry nero_tm_portfolio_animation_wrap" data-title="Ind Hed" data-category="Photography">
											<a href="portfolio-single-2.html">
												<img src="img/portfolio/600x600.jpg" alt="600x600" />
												<div class="nero_tm_portfolio_image_main" data-img-url="img/portfolio/2.jpg"></div>
											</a>
										</div>
									</li>
									<li class="development">
										<div class="entry nero_tm_portfolio_animation_wrap" data-title="Paper Mockup" data-category="Development">
											<a href="portfolio-single-3.html">
												<img src="img/portfolio/600x600.jpg" alt="600x600" />
												<div class="nero_tm_portfolio_image_main" data-img-url="img/portfolio/3.jpg"></div>
											</a>
										</div>
									</li>
									<li class="photography">
										<div class="entry nero_tm_portfolio_animation_wrap" data-title="The Nordic" data-category="Photography">
											<a href="portfolio-single-4.html">
												<img src="img/portfolio/600x600.jpg" alt="600x600" />
												<div class="nero_tm_portfolio_image_main" data-img-url="img/portfolio/4.jpg"></div>
											</a>
										</div>
									</li>
									<li class="design">
										<div class="entry nero_tm_portfolio_animation_wrap" data-title="Creatives Castle" data-category="Design">
											<a href="portfolio-single-5.html">
												<img src="img/portfolio/600x600.jpg" alt="600x600" />
												<div class="nero_tm_portfolio_image_main" data-img-url="img/portfolio/5.jpg"></div>
											</a>
										</div>
									</li>
									<li class="photography">
										<div class="entry nero_tm_portfolio_animation_wrap" data-title="White Bag" data-category="Photography">
											<a href="portfolio-single-6.html">
												<img src="img/portfolio/600x600.jpg" alt="" />
												<div class="nero_tm_portfolio_image_main" data-img-url="img/portfolio/6.jpg"></div>
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* -- /PORTFOLIO FILTER -- */}

					</div>
				</div>
				{/* -- /PORTFOLIO -- */}
				
				{/* -- TESTIMONIALS -- */}
				<div class="nero_tm_section" id="testimonials">
					<div class="nero_tm_testimonials_wrapper_all">
						<div class="nero_tm_universal_box_wrap">
							<div class="bg_wrap">
								<div class="overlay_image testimonial jarallax" data-speed="0"></div>
								<div class="overlay_color testimonial"></div>
							</div>
							<div class="content testimonial">
								<div class="nero_tm_testimonial_wrap">
									<div class="container">
										<div class="carousel_wrap">
											<ul class="owl-carousel">
												<li class="item">
													<div class="inner">
														<div class="quotebox_wrap">
															<i class="xcon-quote-left"></i>
														</div>
														<div class="definitions_wrap">
															<p>“nero team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for works.”</p>
														</div>
														<div class="name_holder">
															<p>Antonio Baraley, CEO Founder</p>
														</div>
													</div>
												</li>
												<li class="item">
													<div class="inner">
														<div class="quotebox_wrap">
															<i class="xcon-quote-left"></i>
														</div>
														<div class="definitions_wrap">
															<p>“We were looking for a logo with a touch of modernism. nero grasped our needs and produced a stunning design.”</p>
														</div>
														<div class="name_holder">
															<p>Calena Gomez, AOC Designer</p>
														</div>
													</div>
												</li>
												<li class="item">
													<div class="inner">
														<div class="quotebox_wrap">
															<i class="xcon-quote-left"></i>
														</div>
														<div class="definitions_wrap">
															<p>“Awesome to work with nero. Good organized, easy to communicate with, responsive with next iterations.”</p>
														</div>
														<div class="name_holder">
															<p>Torren Winston, Photographer.</p>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* -- /TESTIMONIALS -- */}
				
				{/* -- COUNTERBOX -- */}
				<div class="nero_tm_section">
					<div class="container">
						<div class="nero_tm_counter_wrap" data-col="4" data-delay="300">
							<ul class="nero_tm_counter_list nero_tm_miniboxes">
								<li>
									<div class="inner nero_tm_minibox">
										<h3><span><span class="nero_tm_counter" data-from="0" data-to="2222" data-speed="3000">0</span></span></h3>
										<span>Projects Completed</span>
									</div>
								</li>
								<li>
									<div class="inner nero_tm_minibox">
										<h3><span><span class="nero_tm_counter" data-from="0" data-to="333" data-speed="3000">0</span>K</span></h3>
										<span>Lines of Code</span>
									</div>
								</li>
								<li>
									<div class="inner nero_tm_minibox">
										<h3><span><span class="nero_tm_counter" data-from="0" data-to="8888" data-speed="3000">0</span></span></h3>
										<span>Happy Clients</span>
									</div>
								</li>
								<li>
									<div class="inner nero_tm_minibox">
										<h3><span><span class="nero_tm_counter" data-from="0" data-to="777" data-speed="3000">0</span>+</span></h3>
										<span>My Awwwards</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* -- /COUNTERBOX -- */}
				
				{/* -- NEWS -- */}
				<div class="nero_tm_section" id="news">
					<div class="nero_tm_news_wrap">
						<div class="container">
							<div class="nero_tm_title_holder news">
								<h3>Latest News</h3>
								<span>Check out our latest News</span>
							</div>
							<div class="nero_tm_list_wrap blog_list">
								<ul class="total">
									<li class="wow fadeInUp" data-wow-duration="1.2s">
										<div class="inner_list">
											<div class="image_wrap">
												<img class="small" src="img/blog/500x350.jpg" alt="" />
												<img class="big" src="img/blog/1170x450.jpg" alt="" />
												<div class="news_image" data-url="img/blog/1.jpg"></div>
												<a class="link_news" href="index.html"></a>
											</div>
											<div class="definitions_wrap">
												<div class="date_wrap">
													<p>January 22, 2018 <a href="index.html">Logos</a></p>
												</div>
												<div class="title_holder">
													<h3><a href="index.html">How to Create Great Logo for Your Business</a></h3>
												</div>
												<div class="definition">
													<p>If you are reading this, you probably plan to start a small business or a side hustle very soon. And you probably have ...</p>
												</div>
												<div class="full_def">
													<p>If you are reading this, you probably plan to start a small business or a side hustle very soon. And you probably have a couple of questions running through your mind like: Do I really need that logo? Or Yep, I really need one. But how can I get it on a budget? This post was created to help you bring system out of confusion so you can get the best out of your business and enter the market full force. First of all, yes, you do need a logo, and it does not really matter how big or small your business is. Even if you  making a craft soap and sell it to your relatives and friends, you still need a logo. If you plan to monetize an idea, you need a logo for it. Otherwise your work, your efforts, your image and your future brand belong to everyone, like grapes at a grocery store. But most importantly, the final design you come up with should be effective enough to promote your business and get you that place in the sun. Here are a few tips that will make the whole process easier and more fun. The first step to a killer logo is an idea. So start feeding your brain with new impressions and experiences. Use anything that works for you. Try hiking and gain inspiration from nature. Or visit an art gallery. Meditation, photography, action sports In a nutshell, any kind of activity that fills you up with energy and joy may help you get that revolutionary idea. It is always useful to browse the websites (or social media profiles) of your potential rivals to not only judge their logos but to practice analysis. Do you find your competitor logo effective or attractive? Try to think of the ways it helps the rival company to be profitable. Is there something you would change? Why? All of these questions can really help you to improve your own perception of your brand as well as the future marketing strategy. Find out what the strengths and weaknesses of your rivals are and benefit from that knowledge. When it comes to logo design, there are and always will be several safe choices like bold and elegant black and white logos or serif font wordmarks. But if you are striving to get that killer logo, do not be afraid to cross the line and try something rebellious. Go out there and get to know the latest design trends. For example, you may experiment with the bold colors like Ultra Violet, which is the Pantone color of the year, by the way. Or play with the typography and color gradients.</p>
												</div>
												<div class="nero_tm_popup_share_wrap">
													<ul>
														<li><a href="#">Facebook</a></li>
														<li><a href="#">Twitter</a></li>
														<li><a href="#">Linkedin</a></li>
														<li><a href="#">Behance</a></li>
													</ul>
												</div>
												<div class="read_more">
													<a href="#"><span>Read More</span></a>
												</div>
											</div>
										</div>
									</li>
									<li class="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.2s">
										<div class="inner_list">
											<div class="image_wrap">
												<img class="small" src="img/blog/500x350.jpg" alt="" />
												<img class="big" src="img/blog/1170x450.jpg" alt="" />
												<div class="news_image" data-url="img/blog/2.jpg"></div>
												<a class="link_news" href="index.html"></a>
											</div>
											<div class="definitions_wrap">
												<div class="date_wrap">
													<p>February 07, 2018 <a href="index.html">Illustrator</a></p>
												</div>
												<div class="title_holder">
													<h3><a href="index.html">How to Autumn Clean Your Design Career?</a></h3>
												</div>
												<div class="definition">
													<p>Spring cleaning is not just about washing windows and clearing away cobwebs. Your design career also needs a thorough ...</p>
												</div>
												<div class="full_def">
													<p>Whether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the and Whether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the and Whether yo are a freelancer or an in-house designer, or at a studio or agency, you'll probably have to rebrand at the andWhether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the andWhether yo are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the and.Whether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the and Whether you are a freelancer or an in-house designer, or at a studio or agency, you will probably have to rebrand at the andWhether youa are a freelancer or an in-house designer, or at a studio or agency.</p>
												</div>
												<div class="nero_tm_popup_share_wrap">
													<ul>
														<li><a href="#">Facebook</a></li>
														<li><a href="#">Twitter</a></li>
														<li><a href="#">Linkedin</a></li>
														<li><a href="#">Behance</a></li>
													</ul>
												</div>
												<div class="read_more">
													<a href="#"><span>Read More</span></a>
												</div>
											</div>
										</div>
									</li>
									<li class="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.4s">
										<div class="inner_list">
											<div class="image_wrap">
												<img class="small" src="img/blog/500x350.jpg" alt="" />
												<img class="big" src="img/blog/1170x450.jpg" alt="" />
												<div class="news_image" data-url="img/blog/3.jpg"></div>
												<a class="link_news" href="index.html"></a>
											</div>
											<div class="definitions_wrap">
												<div class="date_wrap">
													<p>April 12, 2018 <a href="index.html">Branding</a></p>
												</div>
												<div class="title_holder">
													<h3><a href="index.html">Innovative Ways to Increase Brand</a></h3>
												</div>
												<div class="definition">
													<p>Having a solid, trusted brand is important for your company to thrive. If your target audience does not know or trust ...</p>
												</div>
												<div class="full_def">
													<p>Having a solid, trusted brand is important for your company to thrive. If your target audience does not know or trust your brand, how will you ever increase your customer base and sales? Here are six innovative strategies you can use to increase brand awareness and help your business thrive. Inviting influencers into your niche is a great way to increase brand awareness and hopefully drive sales. When influencers have an established audience that knows and trusts them, once they mention your product(s) and discuss your brand in their content, those mentions will expand your reach and increase peoples awareness of your product. Ikonick is a perfect example of a company that works directly with influencers: It sells canvas art for your home and office. The way Ikonick uses influencers involves providing them with art and having those influencers pose with the art, then share the photos on social media. "Our relationships are an important part of our business,"  co-founder Mark Mastrandrea told me. "Our relationships make up our community, and the community is how our brand grows." Ikonick uses all types of influencers, from Instagram photographers to celebrities. The companys social strategy has enabled it to scale and grow exponentially because its influencers become part of its sales team -- even ambassadors. The relationship is mutually rewarding, Mastrandrea said. Companies can also offer to sponsor influencers at an event (if they do that sort of thing) and even use them as spokespersons for their brand and product(s). A lot of CrossFit-related companies do this, including Rogue Fitness, which sponsors certain athletes with clothing. The athlete then becomes a walking billboard for the company. Have you ever received an order that came in branded packaging? Rather than see it as just another shipment, perhaps you felt that that that special branding made the package seem like a gift. The team knows that the product experience doesn't commence at first use, but rather at the unboxing stage. How companies present their brand, and the story they tell through their design and graphics, can create an emotional connection with the customer that may last even longer than the product itself.</p>
												</div>
												<div class="nero_tm_popup_share_wrap">
													<ul>
														<li><a href="#">Facebook</a></li>
														<li><a href="#">Twitter</a></li>
														<li><a href="#">Linkedin</a></li>
														<li><a href="#">Behance</a></li>
													</ul>
												</div>
												<div class="read_more">
													<a href="#"><span>Read More</span></a>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* -- /NEWS -- */}

				{/* -- CONTACT & FOOTER -- */}
				<div class="nero_tm_section" id="contact">
					<div class="container">
						<div class="nero_tm_title_holder contact">
							<h3>Contact Me</h3>
							<span>Get in touch with me</span>
						</div>
					</div>
					<div class="nero_tm_footer_contact_wrapper_all">
						<div class="nero_tm_contact_wrap_all">
							<div class="container">
								<div class="leftbox">
									<div class="nero_tm_mini_title_holder contact">
										<h4>Get in Touch</h4>
									</div>
									<div class="short_info_wrap">
										<ul>
											<li><p><label>Address:</label><span>123 Qwerty Avenue NYC, USA</span></p></li>
											<li><p><label>Email:</label><span><a href="mailto:example@gmail.com">example@gmail.com</a></span></p></li>
											<li><p><label>Phone:</label><span>+77 022 177 05 05</span></p></li>
											<li><p><label>Website:</label><span><a href="mailto:example@gmail.com">www.yourdomain.com</a></span></p></li>
										</ul>
									</div>
								</div>
								<div class="rightbox">
									<div class="nero_tm_contact_wrap">
										<div class="main_input_wrap">
											<form action="http://frenify.com/" method="post" class="contact_form" id="contact_form">
												<div class="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
												<div class="empty_notice"><span>Please Fill Required Fields</span></div>
												<div class="wrap">
													<input id="name" type="text" placeholder="Your Name"/>
												</div>
												<div class="wrap">
													<input id="email" type="text" placeholder="Your Email"/>
												</div>
												<div class="wrap">
													<textarea id="message" placeholder="Your Message"></textarea>
												</div>
												<div class="nero_tm_button">
													<a id="send_message" href="#"><span>Send Message</span></a>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="nero_tm_footer_wrap">
							<div class="container">
								<p>&copy; Copyright 2019. All Rights are Reserved.</p>
							</div>
						</div>
					</div>
				</div>
				{/* -- /CONTACT & FOOTER -- */}
				
			</div>
		</div>
		{/* -- /RIGHTPART -- */}
		
		<a class="nero_tm_totop" href="#"></a> 
		
	</div>
</div>
{/* -- / WRAPPER ALL -- */}

    </>
  )
}

export default Home