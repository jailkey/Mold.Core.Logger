//!info transpiled
Seed({
		type : 'data'
	},
	function(Logger){

		describe("Test Mold.Core.Logger", function(){
			it("Logger.log", function(){
				Logger.log("test")
			})

			it("Logger.error", function(){
				Logger.error(new Error("TEst irgendwas"))
			})
		})
	}
)