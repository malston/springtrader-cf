var AppRouter = Backbone.Router.extend({

			routes : {
				"" : "home",
				"/accountprofile" : "accountprofile",
				"/portfolio" : "portfolio"
			},

			initialize : function() {
				this.headerView = new HeaderView();
				$('#header').html(this.headerView.render().el);
			},

			accountprofile : function() {
				if (!this.accountProfileView) {
					this.accountProfileView = new AccountProfileView();
					this.accountProfileView.render();
				}
				$('#content').html(this.accountProfileView.el);
				this.tabView = new TabView({
							name : 'profile'
						});
				this.tabView.render();
				$('#tabs').html(this.tabView.el);
			},

			home : function() {
				this.homeView = new HomeView();
				this.homeView.render();
				$('#content').html(this.homeView.el);
				this.tabView = new TabView({
							name : 'home'
						});
				this.tabView.render();
				$('#tabs').html(this.tabView.el);
			},

			portfolio : function() {
				this.PortfolioView = new PortfolioView();
				this.PortfolioView.render();
				$('#content').html(this.PortfolioView.el);
				this.tabView = new TabView({
							name : 'portfolio'
						});
				this.tabView.render();
				$('#tabs').html(this.tabView.el);
			}
		});

tpl.loadTemplates(['home', 'account-summary', 'user-statistics',
				'recent-transactions', 'positions', 'portfolio',
				'portfolio-summary', 'holdinglist', 'holding', 'accountprofile', 'tabs',
				'header'], function() {
			app = new AppRouter();
			Backbone.history.start();
		});
