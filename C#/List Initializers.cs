    public class Tests
    {
        public void InitializersForListAndDevelopers()
        {
            List<Developer> devs = new List<Developer>()
            {
                new Developer() { Name = "William", Height = "5"},
                new Developer() { Name = "Gregg", Height = "5"},
                new Developer() { Name = "Jeff", Height = "5"},
                new Developer() { Name = "Paul", Height = "5"}
            };
        }

        public void InitializersForDevelopers()
        {
            List<Developer> devs = new List<Developer>();
            devs.Add(new Developer() {Name = "William", Height = "5"});
            devs.Add(new Developer() {Name = "Gregg", Height = "5"});
            devs.Add(new Developer() {Name = "Jeff", Height = "5"});
            devs.Add(new Developer() {Name = "Paul", Height = "5"});
        }

        public void InitializersForList()
        {
            Developer dev1 = new Developer();
            dev1.Name = "William";
            dev1.Height = "5";

            Developer dev2 = new Developer();
            dev1.Name = "William";
            dev1.Height = "5";

            Developer dev3 = new Developer();
            dev1.Name = "William";
            dev1.Height = "5";

            Developer dev4 = new Developer();
            dev1.Name = "William";
            dev1.Height = "5";
            
            List<Developer> devs = new List<Developer>()
            {
                dev1, dev2, dev3, dev4
            };
        }

        public void NoInitializers()
        {
            List<Developer> devs = new List<Developer>();

            Developer dev1 = new Developer();
            dev1.Name = "William";
            dev1.Height = "5";

            Developer dev2 = new Developer();
            dev1.Name = "William";
            dev1.Height = "5";

            Developer dev3 = new Developer();
            dev1.Name = "William";
            dev1.Height = "5";

            Developer dev4 = new Developer();
            dev1.Name = "William";
            dev1.Height = "5";

            devs.Add(dev1);
            devs.Add(dev2);
            devs.Add(dev3);
            devs.Add(dev4);
        }
    }

    public class Developer
    {
        public string Name { get; set; }
        public string Height { get; set; }
    }

