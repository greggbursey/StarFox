using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ORA = Oracle.DataAccess.Client;

namespace TestResultImporter
{
    public class TestResult
    {
        public TestResult()
        {

        }

        public string UserName {get; set;}
        public string Date {get; set;}
        public string Browser {get; set;}
        public string Test {get; set;}
        public string Step {get; set;}
        public string ExpectedResult {get; set;}
        public string Pass {get; set;}
        public string Fail {get; set;}
        public string Comment {get; set;}

        public static TestResult FromCSVLine(string line)
        {
            if(String.IsNullOrEmpty(line))
            {
                return null;
            }            

            string[] columns = line.Split(',');

            if(columns == null)
            {
                return null;
            }

            if(columns.Count() < 8)
            {
                return null;
            }

            TestResult result = new TestResult();

            result.UserName = columns[0];
            result.Date = columns[1];
            result.Browser = columns[2];
            result.Test = columns[3];
            result.Step = columns[4];
            result.ExpectedResult = columns[5];
            result.Pass = columns[6];
            result.Fail = columns[7];
            result.Comment = columns[8];

            return result;
        }
    }
        

    class Program
    {
        static void Main(string[] args)
        {
            if(args == null || args.Length != 1)
            {
                Console.WriteLine("You must provide file name....eg.... TestResultImporter.exe <file_name>");
            }


            string file = args[0];

            try
            {
                List<TestResult> results = Parse(file);

                try
                {
                    Save(results);
                }
                catch (Exception ex2)
                {
                    Console.WriteLine("Could not save data....");
                    Console.WriteLine("Message: {0}", ex2.Message);
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine("Could not parse file: {0}", file);
                Console.WriteLine("Message: {0}", ex.Message);
            }
  
        }

        private static List<TestResult> Parse(string file)
        {
            System.IO.FileStream fs = System.IO.File.Open(file, System.IO.FileMode.Open);

            System.IO.StreamReader sr = new System.IO.StreamReader(fs);

            string csv = sr.ReadToEnd();

            sr.Dispose();
            sr.Close();

            string[] lines = csv.Split('\r');

            List<TestResult> results = new List<TestResult>();

            foreach (string line in lines)
            {
                TestResult result = TestResult.FromCSVLine(line);

                if (result != null)
                {
                    results.Add(result);
                }
                else
                {
                    Console.WriteLine("Bad Row...{0}", line);
                }
            }

            return results;
        }

        private static void Save(List<TestResult> results)
        {
            foreach (TestResult result in results)
            {
                using (ORA.OracleConnection conn = new ORA.OracleConnection("Data Source=SCOUT4; User Id=scout; Password=mzgFk0q1J7NWdFb;"))
                {
                    conn.Open();

                    using (ORA.OracleCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandType = System.Data.CommandType.Text;
                        cmd.CommandText = @"
                        INSERT INTO TBL_TEST_RESULTS (USER_NM, TEST_DT, BROWSER, TEST_NM, TEST_STEP, EXPECTED_RESULT, PASS, FAIL, COMMENTS)
                        VALUES (:PARAM_USER_NM, :PARAM_DT, :PARAM_BROWSER, :PARAM_TEST_NM, :PARAM_STEP, :PARAM_EXPECTED, :PARAM_PASS, :PARAM_FAIL, :PARAM_COMMENTS)
                        ";

                        cmd.Parameters.Add("PARAM_USER_NM", result.UserName);
                        cmd.Parameters.Add("PARAM_DT", result.Date);
                        cmd.Parameters.Add("PARAM_BROWSER", result.Browser);
                        cmd.Parameters.Add("PARAM_TEST_NM", result.Test);
                        cmd.Parameters.Add("PARAM_STEP", result.Step);
                        cmd.Parameters.Add("PARAM_EXPECTED", result.ExpectedResult);

                        if (String.IsNullOrEmpty(result.Pass))
                        {
                            cmd.Parameters.Add("PARAM_PASS", "N");
                        }
                        else
                        {
                            cmd.Parameters.Add("PARAM_PASS", "Y");
                        }                        

                        if (String.IsNullOrEmpty(result.Fail))
                        {
                            cmd.Parameters.Add("PARAM_FAIL", "N");
                        }
                        else
                        {
                            cmd.Parameters.Add("PARAM_FAIL", "Y");
                        }

                        cmd.Parameters.Add("PARAM_COMMENTS", result.Comment);


                        cmd.ExecuteNonQuery();
                    }
                }
            }//end foreach
        }

        
        
    }
}
