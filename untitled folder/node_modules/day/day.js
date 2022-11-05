module.exports = function(date) {

  	date = date || new Date;
  	
	var meridian = function(year, month, day) {
		return new Date(year, month, day, 12, 0, 0);
	}
	var msDay = 86400000;

  	var mer = meridian(date.getFullYear(), date.getMonth(), date.getDate());

  	return Math.round((mer - meridian(date.getFullYear(), 0, 0)) / msDay)
};
