<%@ Page Language="C#" AutoEventWireup="false" CodeBehind="ROI_FORM.aspx.cs" Inherits="ICSC.ROI_FORM" %>

<!DOCTYPE html>
<html>
<head>
	<title>ROI Calculator</title>
	<link type="text/css" rel="stylesheet" href="bootstrap/bootstrap.min.css" />
	<link type="text/css" rel="stylesheet" href="bootstrap/bootstrap-theme.min.css" />
	<link type="text/css" rel="stylesheet" href="style.css" />

    <link rel="shortcut icon" type="image/png" href="/Images/BuxtonValueCalc.png"/>
    <link rel="apple-touch-icon" href="/Images/BuxtonValueCalc.png"/>
    <link rel="apple-touch-icon-precomposed" href="/Images/BuxtonValueCalc.png"/>

	<script type="text/javascript" src="jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="angular.min.js"></script>	
	<script type="text/javascript" src="bootstrap/bootstrap.min.js"></script>
	<!-- Logic -->
	<script type="text/javascript">

	    //var asCurrency = function(value) {
	    //    var currency = "";

	    //    var temp = value.toString().replace(',', '');

	    //    var tempArr = temp.split(''); //--array of chars


	    //    var index = 0;
	    //    //--1234
	    //    for (var i = tempArr.length - 1; i >= 0; i--) {
	    //        if (index == 3) {
	    //            currency += ",";
	    //            index = 0;
	    //        }
	    //        currency += tempArr[i];
	    //        index++;
	    //    }

	    //    //-- 432,1

	    //    temp = currency.toString().split('');

	    //    var temp2 = "";

	    //    for (var i = temp.length - 1; i >= 0; i--) {
	    //        temp2 += temp[i];
	    //    }

	    //    currency = "$ " + temp2;

	    //    return currency;
	    //};

		var Buxton = Buxton || {};
		Buxton.Constants = {		
			FIRST_YEAR_PCT: 0.12,
			INCREATE_STORE_OPEN: 0.55,
			INCREMENTAL_EXISTING: 0.17-0.124,
			DECREASE_STORE_OPENINGS: 0.32,
			SALES_INCREASE_MULT: 1 + (0.17-0.124),
			REVENUE_INCREATE_MULT: 1 + 0.12
		};
		
		Buxton.Models = Buxton.Models || {};
		Buxton.Models.ROI = function(){
			var self = this;
			
			self.companyName = "";
			self.emailAddress = "";
			self.locationCount = 0;
			self.locationOpenCount = 0;

			self.revenueAmount = 0.0;
			self.revenueAmountCurrency = "";

			self.firstYearRevenueAmount = 0.0;
			self.firstYearRevenueAmountCurrency = "";

			self.investmentAmount = 0.0;
			self.investmentAmountCurrency = "";

			self.asCurrency = function (value) {
			    var currency = "";

			    var temp = value.toString().replace(',', '');

			    var tempArr = temp.split(''); //--array of chars


			    var index = 0;
                //--1234
			    for (var i = tempArr.length - 1; i >= 0; i--)
			    {
			        if (index == 3)
			        {
			            currency += ",";
			            index = 0;
			        }
			        currency += tempArr[i];
			        index++;
			    }

			    //-- 432,1

			    temp = currency.toString().split('');

			    var temp2 = "";

			    for (var i = temp.length - 1; i >= 0; i--)
			    {
			        temp2 += temp[i];
			    }

			    currency = "$ " + temp2;

			    return currency;
			};
		};
		
		Buxton.Models.ROIResult = function(){
			var self = this;
			
			//1
			self.firstYearPercentage = Math.floor(Buxton.Constants.FIRST_YEAR_PCT * 100.0).toFixed(0);
			self.firstYearIncreasePerStore = 0.0;
			self.firstYearIncreasePerStoreCurrency = "";
			self.firstYearTotalIncrease = 0.0;
			
			
			//2
			self.compSalesTrend = (Buxton.Constants.INCREMENTAL_EXISTING * 100.0).toFixed(2);
			self.compSalesIncrease = 0.0;
			self.compSalesIncreaseCurrency = "";
			self.compSalesTotal = 0.0;
			
			//3
			self.clientDecreaseAverage = Math.floor(0.32 * 100.0).toFixed(0);
			self.clientAvoidedLocationsBelowAverage = 0;
			self.clientTotalSavingsBelowAverage = 0.0;
			
			//4
			self.pacePercentage = Math.floor(0.55 * 100.0).toFixed(0);
			self.paceIncrease = 0;

			self.asCurrency = function (value) {
			    var currency = "";

			    var temp = value.toString().replace(',', '');

			    var tempArr = temp.split(''); //--array of chars


			    var index = 0;
			    //--1234
			    for (var i = tempArr.length - 1; i >= 0; i--) {
			        if (index == 3) {
			            currency += ",";
			            index = 0;
			        }
			        currency += tempArr[i];
			        index++;
			    }

			    //-- 432,1

			    temp = currency.toString().split('');

			    var temp2 = "";

			    for (var i = temp.length - 1; i >= 0; i--) {
			        temp2 += temp[i];
			    }

			    currency = "$ " + temp2;

			    return currency;
			};
		};
		
	</script>
	
	<!-- UI -->
	<script type="text/javascript">
			var app = angular.module("buxton-roi", []);
			
			app.controller("FormController", function ($scope) {
			    $(".panel-heading").click(function () {			        
			        $(this).next().slideToggle(250);
			    });			    

			    $(".result-body").hide();

				$scope.test = "HI FROM CONTROLLER";
				
				$scope.roi = new Buxton.Models.ROI();
				
				$scope.result = new Buxton.Models.ROIResult();
								$scope.showResults = false;				
				$scope.showCalculate = true;
				$scope.showEdit = false;
				$scope.showClear = true;
				$scope.showSubmit = false;
				
				
				$scope.clear = function(){
					$scope.roi = new Buxton.Models.ROI();
					$scope.result = new Buxton.Models.ROIResult();
					$scope.showResults = false;
					
					$("#questions").slideDown(500);
					$("#results").hide();
					$(".result-body").hide();
					//$("#editButton").hide();
					//$("#clearButton").show();		

						$scope.showCalculate = true;
						$scope.showEdit = false;
						$scope.showClear = true;
						$scope.showSubmit = false;

				};			
				
				$scope.edit = function(){
					$scope.showResults = false;
					
					$("#questions").slideDown(500);
					$("#results").hide();
					//$("#editButton").hide();
					//$("#clearButton").show();	
					
						$scope.showCalculate = true;
						$scope.showEdit = false;
						$scope.showClear = true;
						$scope.showSubmit = false;
				};
				
				$scope.calculate = function()
				{
					$scope.showResults = true;
					$("#questions").hide();
					$("#results").slideDown(500);			
					//$("#editButton").show();
					//$("#clearButton").hide();					
					//1
					$scope.result.firstYearIncreasePerStore = Math.floor(($scope.roi.firstYearRevenueAmount * Buxton.Constants.REVENUE_INCREATE_MULT)  - $scope.roi.firstYearRevenueAmount).toFixed(0);
					$scope.result.firstYearTotalIncrease = Math.floor($scope.result.firstYearIncreasePerStore * $scope.roi.locationOpenCount).toFixed(0);
					
					//2
					$scope.result.compSalesIncrease = Math.floor(($scope.result.compSalesTrend / 100) * $scope.roi.revenueAmount).toFixed(0);
					$scope.result.compSalesTotal = Math.floor($scope.result.compSalesIncrease * $scope.roi.locationCount).toFixed(0);
					
					//3
					$scope.result.clientAvoidedLocationsBelowAverage = Math.floor(($scope.result.clientDecreaseAverage / 100) * ($scope.roi.locationOpenCount / 2)).toFixed(0);
					$scope.result.clientTotalSavingsBelowAverage = Math.floor($scope.result.clientAvoidedLocationsBelowAverage * $scope.roi.investmentAmount).toFixed(0);
					
					//4
					$scope.result.paceIncrease = Math.floor($scope.roi.locationOpenCount * ($scope.result.pacePercentage / 100.0)).toFixed(0);
					
					$scope.showCalculate = false;
					$scope.showEdit = true;
					$scope.showClear = true;
					$scope.showSubmit = true;

					$scope.submit();
				};

				$scope.submit = function () {
				    var obj = {
				        roi: $scope.roi,
				        result: $scope.result
				    }

				    var json = JSON.stringify(obj);

				    $.ajax({
				        type: "POST",
				        url: "/ROI_Consume.asmx/Capture",
				        data: json,
				        contentType: 'application/json; charset=UTF-8',
				        dataType: 'json',
				        success: function (result) {
				            //$scope.clear();
				            //$scope.$digest();
				            //$(".result-body").hide();
				        },
				        error: function (msg) {
				            alert("Ooops! We had an error");
				        }
				    });
				}
			});
	</script>
</head>
<body ng-app="buxton-roi">

<div style="width: 800px; margin-left: auto; margin-right: auto; margin-top: 50px;" ng-controller="FormController">
	<div class="panel panel-primary">
	  <div class="panel-body">
			<div>
				<div class="left"><img src="logo.png"  /></div>
				<div class="right"><h3>Value Calculator</h3></div>
				<div class="clear"></div>
			</div>
			<br />
			<div id="questions">
				<div class="well">
					<h4>{{roi.companyName}}</h4>
					<input type="text" class="form-control" placeholder="Type Company Name Here" ng-model="roi.companyName"/>				
				</div>	
				<table class="table">
					<tr>
						<td>How many total locations do you have?</td>
						<td><input type="text" class="form-control" ng-model="roi.locationCount" onClick="this.setSelectionRange(0, this.value.length)"/></td>
					</tr>
										<tr>
						<td>Over the next year how many locations do you plan to open?</td>
						<td><input type="text" class="form-control" ng-model="roi.locationOpenCount" onClick="this.setSelectionRange(0, this.value.length)"/></td>
					</tr>
										<tr>
						<td>What is your average revenue per store?</td>
						<td><span>{{roi.revenueAmountCurrency}}</span><input type="text" class="form-control" ng-model="roi.revenueAmount" ng-change="roi.revenueAmountCurrency = roi.asCurrency(roi.revenueAmount)" onClick="this.setSelectionRange(0, this.value.length)"/></td>
					</tr>
										<tr>
						<td>What is the average first year revenue of your new stores?</td>
						<td><span>{{roi.firstYearRevenueAmountCurrency}}</span><input type="text" class="form-control" ng-model="roi.firstYearRevenueAmount" ng-change="roi.firstYearRevenueAmountCurrency = roi.asCurrency(roi.firstYearRevenueAmount)" onClick="this.setSelectionRange(0, this.value.length)"/></td>
					</tr>
										<tr>
						<td>What is your average location investment?</td>
						<td><span>{{roi.investmentAmountCurrency}}</span><input type="text" class="form-control" ng-model="roi.investmentAmount" ng-change="roi.investmentAmountCurrency = roi.asCurrency(roi.investmentAmount)" onClick="this.setSelectionRange(0, this.value.length)"/></td>
					</tr>
				</table>
			</div>			
			<div id="results" style="display: none;">		
			<br />
					<!-- 1 -->
					<div class="panel panel-success">
						  <div class="panel-heading">
							<h3 class="panel-title" style="font-weight: bold">1)&nbsp;&nbsp;Your Estimated Increase in 1st Year Sales &nbsp;&nbsp;&nbsp;<span class="badge right">&nbsp;{{result.asCurrency(result.firstYearTotalIncrease)}}</span><span class="clear"></h3>
						  </div>
						  <div class="panel-body result-body" style="padding-left: 15px; padding-right: 15px; padding-top: 2px; padding-bottom: 2px;">
							<table class="table table-condensed small" >
								<tr>
									<td>Buxton Client Increase in 1st Year Sales:</td>
									<td><span>{{result.firstYearPercentage}}&nbsp;%</span></td>
								</tr>
								<tr>
									<td>Your Estimated 1st Year Sales Increase Per Store:</td>
									<td><span>&nbsp;{{result.asCurrency(result.firstYearIncreasePerStore)}}</span></td>
								</tr>
							</table>
                            <p style="font-style: initial; font-size: 10px;">
                                *&nbsp;Buxton client data was utilized 12 months beyond the last date of the contract period to calculate the annualized increase.
                            </p>
                            <p style="font-style: initial; font-size: 10px;">
                                *&nbsp;1) Based on comparison of stores open in the last year of the initial Buxton contract year compared to stores open prior to the Buxton contract date.  
                            </p>
						  </div>
					  </div>	
			
			
					<!-- 2 -->
					<div class="panel panel-success">
						  <div class="panel-heading">
							<h3 class="panel-title" style="font-weight: bold">2)&nbsp;&nbsp;Your Estimated Increase in Comp Sales &nbsp;&nbsp;&nbsp;<span class="badge right">&nbsp;{{result.asCurrency(result.compSalesTotal)}}</span><span class="clear"></h3>
						  </div>
						  <div class="panel-body result-body" style="padding-left: 15px; padding-right: 15px; padding-top: 2px; padding-bottom: 2px;">
							<table class="table table-condensed small" >
								<tr>
									<td>Buxton Client Comp Sales Increase Above Existing YoY Trend:</td>
									<td><span>{{result.compSalesTrend}}&nbsp;%</span></td>
								</tr>
								<tr>
									<td>Your Estimated Incremental Comp Sales Increase:</td>
									<td><span>&nbsp;{{result.asCurrency(result.compSalesIncrease)}}</span></td>
								</tr>
							</table>
                            <p style="font-style: initial; font-size: 10px;">
                                *&nbsp;2) Based on comparison of sales in the final contract year above established trends.
                            </p>
						  </div>
					  </div>
									
					<div class="clear"></div>
									
					<!-- 3 -->
					<div class="panel panel-success">
						  <div class="panel-heading">
							<h3 class="panel-title" style="font-weight: bold">3)&nbsp;&nbsp;Your Savings From Avoiding Opening Below Average Stores &nbsp;&nbsp;&nbsp;<span class="badge right">&nbsp;{{result.asCurrency(result.clientTotalSavingsBelowAverage)}}</span><span class="clear"></h3>
						  </div>
						  <div class="panel-body result-body" style="padding-left: 15px; padding-right: 15px; padding-top: 2px; padding-bottom: 2px;">
							<table class="table table-condensed small">
								<tr>
									<td>Buxton Client Decrease In Store Openings Below Average:</td>
									<td><span>{{result.clientDecreaseAverage}}&nbsp;%</span></td>
								</tr>
								<tr>
									<td>Your Estimated Number of Avoided Below Average</td>
									<td><span>{{result.clientAvoidedLocationsBelowAverage}}</span></td>
								</tr>
							</table>
                              <p style="font-style: initial; font-size: 10px;">
                                *&nbsp;3) Based on reduction in the number of locations performing below average.  *Average is calculated  at the time of contract execution.  
                            </p>
						  </div>
					  </div>
					
					<!-- 4 -->
					<div class="panel panel-success">
						  <div class="panel-heading">
							<h3 class="panel-title" style="font-weight: bold">4)&nbsp;&nbsp;Your Expected Increase in Store Openings Beyond Current Pace &nbsp;&nbsp;&nbsp;&nbsp;<span class="badge right">{{result.paceIncrease}}</span><span class="clear"></h3>
						  </div>
						  <div class="panel-body result-body" style="padding-left: 15px; padding-right: 15px; padding-top: 2px; padding-bottom: 2px;">
							<table class="table table-condensed small" >
								<tr>
									<td>Buxton Client Increase in Pace of New Store Openings:</td>
									<td><span>{{result.pacePercentage}}&nbsp;%</span></td>
								</tr>
							</table>
                              <p style="font-style: initial; font-size: 10px;">
                                *&nbsp;4)  Based on comparison of average annual number of new locations opened at the end of the contract compared to prior to the contract.  
                            </p>
						  </div>
					  </div>
					  
					  <div class="clear"></div>
			</div>
			<div>                        
						<table class="table" style="width: 100%; text-align: center; margin-top: 10px; padding-top: 10px;">
							<tr>
                                <td><button class="btn btn-danger" style="width: 150px;" ng-click="clear()" id="clearButton" ng-if="showClear">CLEAR</button></td>								
								<td><button class="btn btn-warning" style="width: 150px;" ng-click="edit()" id="editButton" ng-if="showEdit">EDIT</button></td>		
                                <td><button class="btn btn-success" style="width: 150px;" ng-click="calculate()" ng-if="showCalculate">CALCULATE</button></td>						
							</tr>
                            <tr>
                                <td colspan="3">                                    
                                </td>
                            </tr>
						</table>

                        <div ng-if="showSubmit">
                            <span style="font-style: italic; color: #d8573f; font-size: 10px;">Based on average Buxton client results.  Actual results vary by client. Not a guarantee of success. </span>              
<%--                            <div class="right">
                                    <div class="left" style="padding: 5px;"><h4>Email:</h4> &nbsp;&nbsp;&nbsp;</div>
                                    <div class="left"  style="padding: 5px;"><input type="text" class="form-control" ng-model="roi.emailAddress" /></div>
                                    <div class="right"  style="padding: 5px;"><button class="btn btn-primary" id="submit-btn" ng-click="submit()">SUBMIT</button></div>   
                            </div>
                            <div class="clear"></div>--%>
                         
                        </div>

			</div>	
	  </div>
	</div>
</div>
</body>
</html>