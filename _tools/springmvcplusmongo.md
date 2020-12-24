---
name: springMvcPlusMongo
description: "\u6155\u8BFE\u7F51 \u9996\u9875 \u5B9E\u6218 \u8DEF\u5F84 \u733F\u95EE
  \u624B\u8BB0 \u767B\u5F55 \u6CE8\u518C 11.11 Python  \u624B\u8BB0 \\ \u53F2\u4E0A\u6700\u5168\uFF0C\u6700\u8BE6idea\u642D\u5EFAspringdata+mongoDB+maven+springmvc
  \u53F2\u4E0A\u6700\u5168\uFF0C\u6700\u8BE6idea\u642D\u5EFAspringdata+mongoDB+maven+springmvc
  \u539F\u521B 2016-10-21 10:54:297759\u6D4F\u89C82\u8BC4\u8BBA \u4F5C\u4E3AIT\u5C4A\u7684\u5C0F\u5F1F\uFF0C\u672C\u7BC7\u4F5C\u4E3A\u672C\u4EBA\u7684\u7B2C\u4E00\u7BC7\u624B\u8BB0\uFF0C\u8FD8\u5E0C\u671B\u5404\u4F4D\u5927\u725B\u591A\u591A\u6307\u70B9\uFF0C\u4EE5\u4E0B\u5747\u4E3A\u4E2A\u4EBA\u5B66\u4E60\u6240\u5F97\uFF0C\u5982\u6709\u9519\u8BEF\uFF0C\u656C\u8BF7\u6307\u6B63\u3002\u672C\u7740\u670D\u52A1IT\u5C0F\u767D\u7684\u539F\u5219\uFF0C\u8BE5\u624B\u8BB0\u6BD4\u8F83\u8BE6\u7EC6\u3002\u7531\u4E8E\u6700\u8FD1\u4F7F\u7528postgre\u5F00\u53D1\u5927\u578B\u9879\u76EE\uFF0C\u53D1\u73B0\u4E86\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u5F0A\u7AEF\u53CA\u67E5\u8BE2\u6548\u7387\u4E4B\u6162\uFF0C\u82E6\u5FC3\u94BB\u7814\u4E4B\u4E0B\uFF0C\u5BF9nosql\u7684mongoDB\u4ECE\u65E0\u77E5\u5230\u6709\u4E86\u521D\u6B65\u4E86\u89E3\u3002
  \ \u9879\u76EE\u73AF\u5883\uFF1Awin10+IntelliJ IDEA2016+maven3.3.9+MongoDB 3.2+JDK1.7+spring4.1.7
  \ \u63A8\u8350\u7F51\u7AD9\uFF08\u9002\u5408\u5B66\u4E60\u5404\u79CD\u77E5\u8BC6\u7684\u57FA\u7840\uFF09\uFF1Ahttp://www.runoob.com/
  mongo\u5B89\u88C5\u8BF7\u53C2\u8003http://www.runoob.com/mongodb/mongodb-window-install.html
  \ \u7531\u4E8E\u6700\u8FD1osChina\u7684maven\u4ED3\u5E93\u6302\u6389\uFF0C\u63A8\u8350\u5927\u5BB6\u4F7F\u7528\u963F\u91CC\u7684\u955C\u50CF\uFF0C\u901F\u5EA6\u5FEB\u7684\u98DE\u8D77
  maven\u914D\u7F6E\uFF1A<localRepository>F:\\.m2\\repository</localRepository>  <mirrors>
  \    <mirror>       <id>alimaven</id>       <name>aliyun maven</name>       <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
  \      <mirrorOf>central</mirrorOf>             </mirror>   </mirrors> \u8FD9\u91CC\u4E0D\u5B9E\u7528idea\u81EA\u5E26maven\u63D2\u4EF6\uFF0C\u6539\u75283.3.9
  \u56FE\u7247\u63CF\u8FF0  \u9879\u76EE\u7ED3\u6784\uFF1A\u56FE\u7247\u63CF\u8FF0
  \u8FD9\u91CCdao\u4E0EmongoDao\u5206\u522B\u4E3AmongoDB\u7684\u4E24\u79CD\u67E5\u8BE2\u65B9\u5F0F\uFF1A
  dao\u4E3AJPA\u7684\u67E5\u8BE2\u65B9\u5F0F\uFF08\u8BF7\u53C2\u8003springdataJPA\uFF09
  mongoDao\u4F7F\u7528mongoTemplate\uFF0C\u7C7B\u4F3C\u4E8E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4F7F\u7528\u7684jdbcTemplate
  \ \u4E0D\u7F57\u55E6\uFF0C\u4E0A\u4EE3\u7801 \u5148\u770B\u914D\u7F6E\u6587\u4EF6
  spring-context.xm\u4E3A\u6700\u57FA\u672C\u7684spring\u914D\u7F6E  <?xml version=\"1.0\"
  encoding=\"UTF-8\"?> <beans xmlns=\"http://www.springframework.org/schema/beans\"
  \       xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"        xmlns:context=\"http://www.springframework.org/schema/context\"
  \       xsi:schemaLocation=\"http://www.springframework.org/schema/beans        http://www.springframework.org/schema/beans/spring-beans.xsd
  \       http://www.springframework.org/schema/context        http://www.springframework.org/schema/context/spring-context.xsd\">
  \     <!--\u626B\u63CFservice\u5305\u55F2\u6240\u6709\u4F7F\u7528\u6CE8\u89E3\u7684\u7C7B\u578B-->
  \    <context:component-scan base-package=\"com.lida.mongo\"/>      <!-- \u5BFC\u5165mongodb\u7684\u914D\u7F6E\u6587\u4EF6
  -->     <import resource=\"spring-mongo.xml\" />     <!-- \u5F00\u542F\u6CE8\u89E3
  -->     <context:annotation-config /> </beans> spring-web.xml\u4E3Aspringmvc\u7684\u57FA\u672C\u914D\u7F6E
  \ <?xml version=\"1.0\" encoding=\"UTF-8\"?> <beans xmlns=\"http://www.springframework.org/schema/beans\"
  \       xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"        xmlns:mvc=\"http://www.springframework.org/schema/mvc\"
  \       xmlns:context=\"http://www.springframework.org/schema/context\"        xsi:schemaLocation=\"http://www.springframework.org/schema/beans
  \       http://www.springframework.org/schema/beans/spring-beans.xsd        http://www.springframework.org/schema/mvc
  \       http://www.springframework.org/schema/mvc/spring-mvc-4.0.xsd        http://www.springframework.org/schema/context
  \       http://www.springframework.org/schema/context/spring-context-4.0.xsd\">
  \    <!--\u914D\u7F6Espringmvc-->     <!--1.\u5F00\u542Fspringmvc\u6CE8\u89E3\u6A21\u5F0F-->
  \    <!--\u7B80\u5316\u914D\u7F6E\uFF1A         (1)\u4E3B\u52A8\u6CE8\u518CDefaultAnnotationHandlerMapping,AnnotationMethodHandlerAdapter
  \        (2)\u63D0\u4F9B\u4E00\u7CFB\u5217\u529F\u80FD\uFF1A\u6570\u636E\u7ED1\u5B9A\uFF0C\u6570\u5B57\u548C\u65E5\u671F\u7684format
  @NumberFormt @DataTimeFormat\uFF0Cxml json\u9ED8\u8BA4\u7684\u8BFB\u5199\u652F\u6301-->
  \    <mvc:annotation-driven/>     <!--servlet-mapping-->     <!--2\u9759\u6001\u8D44\u6E90\u9ED8\u8BA4\u7684servlet\u914D\u7F6E\uFF0C\uFF081\uFF09\u5141\u8BB8\u5BF9\u9759\u6001\u8D44\u6E90\u7684\u5904\u7406\uFF1Ajs\uFF0Cgif
  \   \uFF082\uFF09\u5141\u8BB8\u4F7F\u7528\u201C/\u201D\u505A\u6574\u4F53\u6620\u5C04-->
  \    <!-- \u5BB9\u5668\u9ED8\u8BA4\u7684DefaultServletHandler\u5904\u7406 \u6240\u6709\u9759\u6001\u5185\u5BB9\u4E0E\u65E0RequestMapping\u5904\u7406\u7684URL-->
  \    <mvc:default-servlet-handler/>     <!--3:\u914D\u7F6Ejsp \u663E\u793AviewResolver-->
  \    <bean class=\"org.springframework.web.servlet.view.InternalResourceViewResolver\">
  \        <property name=\"viewClass\" value=\"org.springframework.web.servlet.view.JstlView\"/>
  \        <property name=\"prefix\" value=\"/WEB-INF/views/\"/>         <property
  name=\"suffix\" value=\".jsp\"/>     </bean>      <!-- 4\u81EA\u52A8\u626B\u63CF\u4E14\u53EA\u626B\u63CF@Controller
  -->     <context:component-scan base-package=\"com.lida.mongo.controller\" />      <!--
  \u5B9A\u4E49\u65E0\u9700Controller\u7684url<->view\u76F4\u63A5\u6620\u5C04 -->     <mvc:view-controller
  path=\"/\" view-name=\"redirect:/goMongo/list\"/>  </beans> spring-mongo.xml\u4E3Amongo\u914D\u7F6E
  \ <?xml version=\"1.0\" encoding=\"UTF-8\"?> <beans xmlns=\"http://www.springframework.org/schema/beans\"
  \       xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"        xmlns:context=\"http://www.springframework.org/schema/context\"
  \       xmlns:mongo=\"http://www.springframework.org/schema/data/mongo\"        xsi:schemaLocation=\"http://www.springframework.org/schema/beans
  \               http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
  \               http://www.springframework.org/schema/context                http://www.springframework.org/schema/context/spring-context.xsd
  \               http://www.springframework.org/schema/data/mongo             http://www.springframework.org/schema/data/mongo/spring-mongo.xsd\">
  \     <!-- \u52A0\u8F7Dmongodb\u7684\u5C5E\u6027\u914D\u7F6E\u6587\u4EF6 -->     <context:property-placeholder
  location=\"classpath:mongo.properties\" />     <!-- spring\u8FDE\u63A5mongodb\u6570\u636E\u5E93\u7684\u914D\u7F6E
  -->     <mongo:mongo-client replica-set=\"${mongo.hostport}\" id=\"mongo\">         <mongo:client-options
  connections-per-host=\"${mongo.connectionsPerHost}\"                        threads-allowed-to-block-for-connection-multiplier=\"${mongo.threadsAllowedToBlockForConnectionMultiplier}\"
  \                       connect-timeout=\"${mongo.connectTimeout}\"                        max-wait-time=\"${mongo.maxWaitTime}\"
  \                       socket-timeout=\"${mongo.socketTimeout}\"/>     </mongo:mongo-client>
  \    <!-- mongo\u7684\u5DE5\u5382\uFF0C\u901A\u8FC7\u5B83\u6765\u53D6\u5F97mongo\u5B9E\u4F8B,dbname\u4E3Amongodb\u7684\u6570\u636E\u5E93\u540D\uFF0C\u6CA1\u6709\u7684\u8BDD\u4F1A\u81EA\u52A8\u521B\u5EFA
  -->     <mongo:db-factory  id=\"mongoDbFactory\" dbname=\"mongoLida\" mongo-ref=\"mongo\"
  />      <!-- \u53EA\u8981\u4F7F\u7528\u8FD9\u4E2A\u8C03\u7528\u76F8\u5E94\u7684\u65B9\u6CD5\u64CD\u4F5C
  -->     <bean id=\"mongoTemplate\" class=\"org.springframework.data.mongodb.core.MongoTemplate\">
  \        <constructor-arg name=\"mongoDbFactory\" ref=\"mongoDbFactory\" />     </bean>
  \    <!-- mongodb bean\u7684\u4ED3\u5E93\u76EE\u5F55\uFF0C\u4F1A\u81EA\u52A8\u626B\u63CF\u6269\u5C55\u4E86MongoRepository\u63A5\u53E3\u7684\u63A5\u53E3\u8FDB\u884C\u6CE8\u5165
  -->     <mongo:repositories base-package=\"com.lida.mongo\" /> </beans> mongo.properties
  \ #mongoDB\u8FDE\u63A5\u914D\u7F6E mongo.hostport=127.0.0.1:27017 mongo.connectionsPerHost=8
  mongo.threadsAllowedToBlockForConnectionMultiplier=4 #\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4
  mongo.connectTimeout=1000 #\u7B49\u5F85\u65F6\u95F4 mongo.maxWaitTime=1500 #Socket\u8D85\u65F6\u65F6\u95F4
  mongo.socketTimeout=1500 pom.xml  <project xmlns=\"http://maven.apache.org/POM/4.0.0\"
  xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"   xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0
  http://maven.apache.org/maven-v4_0_0.xsd\">   <modelVersion>4.0.0</modelVersion>
  \  <groupId>com.liad</groupId>   <artifactId>mongo</artifactId>   <packaging>war</packaging>
  \  <version>1.0-SNAPSHOT</version>   <name>mongo Maven Webapp</name>   <url>http://maven.apache.org</url>
  \  <dependencies>     <!--\u4F7F\u7528junit4\uFF0C\u6CE8\u89E3\u7684\u65B9\u5F0F\u6D4B\u8BD5-->
  \    <dependency>       <groupId>junit</groupId>       <artifactId>junit</artifactId>
  \      <version>4.11</version>       <scope>test</scope>     </dependency>     <!--\u65E5\u5FD7-->
  \    <!--\u65E5\u5FD7 slf4j,log4j,logback,common-logging-->     <!--slf4j\u662F\u89C4\u8303/\u63A5\u53E3-->
  \    <!--log4j,logback,common-logging\u662F\u65E5\u5FD7\u5B9E\u73B0 \u672C\u9879\u76EE\u4F7F\u7528slf4j
  + logback -->     <dependency>       <groupId>org.slf4j</groupId>       <artifactId>slf4j-api</artifactId>
  \      <version>1.7.12</version>     </dependency>     <!--\u5B9E\u73B0slf4j\u5E76\u6574\u5408-->
  \    <dependency>       <groupId>ch.qos.logback</groupId>       <artifactId>logback-core</artifactId>
  \      <version>1.1.1</version>     </dependency>     <dependency>       <groupId>ch.qos.logback</groupId>
  \      <artifactId>logback-classic</artifactId>       <version>1.1.1</version>     </dependency>
  \    <!--\u6570\u636E\u5E93\u76F8\u5173-->     <dependency>       <groupId>mysql</groupId>
  \      <artifactId>mysql-connector-java</artifactId>       <version>5.1.22</version>
  \      <!--maven\u5DE5\u4F5C\u8303\u56F4   \u9A71\u52A8\u5728\u771F\u6B63\u5DE5\u4F5C\u7684\u65F6\u5019\u4F7F\u7528\uFF0C\u6545\u751F\u547D\u5468\u671F\u6539\u4E3Aruntime-->
  \      <scope>runtime</scope>     </dependency>      <!--servlet web\u76F8\u5173-->
  \    <dependency>       <groupId>taglibs</groupId>       <artifactId>standard</artifactId>
  \      <version>1.1.2</version>     </dependency>     <dependency>       <groupId>jstl</groupId>
  \      <artifactId>jstl</artifactId>       <version>1.2</version>     </dependency>
  \    <dependency>       <groupId>com.fasterxml.jackson.core</groupId>       <artifactId>jackson-databind</artifactId>
  \      <version>2.5.4</version>     </dependency>      <!--spring-->     <!--spring\u6838\u5FC3-->
  \    <dependency>       <groupId>org.springframework</groupId>       <artifactId>spring-core</artifactId>
  \      <version>4.1.7.RELEASE</version>     </dependency>     <dependency>       <groupId>org.springframework</groupId>
  \      <artifactId>spring-beans</artifactId>       <version>4.1.7.RELEASE</version>
  \    </dependency>     <dependency>       <groupId>org.springframework</groupId>
  \      <artifactId>spring-context</artifactId>       <version>4.1.7.RELEASE</version>
  \    </dependency>     <!--spring dao-->       <dependency>         <groupId>org.springframework.data</groupId>
  \        <artifactId>spring-data-mongodb</artifactId>         <version>1.8.0.RELEASE</version>
  \      </dependency>     <dependency>       <groupId>org.mongodb</groupId>       <artifactId>mongo-java-driver</artifactId>
  \      <version>3.2.2</version>     </dependency>     <dependency>       <groupId>org.springframework</groupId>
  \      <artifactId>spring-tx</artifactId>       <version>4.1.7.RELEASE</version>
  \    </dependency>     <!--spring web-->     <dependency>       <groupId>org.springframework</groupId>
  \      <artifactId>spring-web</artifactId>       <version>4.1.7.RELEASE</version>
  \    </dependency>     <dependency>       <groupId>org.springframework</groupId>
  \      <artifactId>spring-webmvc</artifactId>       <version>4.1.7.RELEASE</version>
  \    </dependency>     <!--spring test-->     <dependency>       <groupId>org.springframework</groupId>
  \      <artifactId>spring-test</artifactId>       <version>4.1.7.RELEASE</version>
  \    </dependency>      <dependency>       <groupId>commons-collections</groupId>
  \      <artifactId>commons-collections</artifactId>       <version>3.2.2</version>
  \    </dependency>     <dependency>       <groupId>commons-fileupload</groupId>
  \      <artifactId>commons-fileupload</artifactId>       <version>1.3.2</version>
  \    </dependency>     <dependency>       <groupId>commons-codec</groupId>       <artifactId>commons-codec</artifactId>
  \      <version>1.10</version>     </dependency>   </dependencies>   <dependencyManagement>
  \    <dependencies>       <dependency>         <groupId>org.springframework</groupId>
  \        <artifactId>spring-framework-bom</artifactId>         <version>${spring.version}</version>
  \        <type>pom</type>         <scope>import</scope>       </dependency>       <dependency>
  \        <groupId>net.sf.ehcache</groupId>         <artifactId>ehcache-core</artifactId>
  \        <version>2.6.9</version>       </dependency>     </dependencies>   </dependencyManagement>
  \  <build>     <finalName>mongo</finalName>     <plugins>       <plugin>         <groupId>org.apache.maven.plugins</groupId>
  \        <artifactId>maven-compiler-plugin</artifactId>         <configuration>
  \          <source>1.6</source>           <target>1.6</target>         </configuration>
  \      </plugin>     </plugins>   </build> </project> \u4E24\u4E2A\u5B9E\u4F53\u7C7B\uFF1A
  \  /**  * Created by DuLida on 2016/10/20.  */ public class Address {      private
  String city;     private String street;     private int num;      public Address()
  {     }      public Address(String city, String street, int num) {         this.city
  = city;         this.street = street;         this.num = num;     }      public
  String getCity() {         return city;     }      public void setCity(String city)
  {         this.city = city;     }      public String getStreet() {         return
  street;     }      public void setStreet(String street) {         this.street =
  street;     }      public int getNum() {         return num;     }      public void
  setNum(int num) {         this.num = num;     }      @Override     public String
  toString() {         return \"Address{\" +                 \"city='\" + city + '\\''
  +                 \", street='\" + street + '\\'' +                 \", num=\" +
  num +                 '}';     } }  /**  * Created by DuLida on 2016/10/20.  */
  @Document(collection=\"person\") public class Person implements Serializable {      @Id
  \    private ObjectId id;     private String name;     private int age;     private
  Address address;      public Person() {     }      public Person( String name, int
  age, Address address) {         this.name = name;         this.age = age;         this.address
  = address;     }      public ObjectId getId() {         return id;     }      public
  void setId(ObjectId id) {         this.id = id;     }      public String getName()
  {         return name;     }      public void setName(String name) {         this.name
  = name;     }      public int getAge() {         return age;     }      public void
  setAge(int age) {         this.age = age;     }      public Address getAddress()
  {         return address;     }      public void setAddress(Address address) {         this.address
  = address;     }      @Override     public String toString() {         return \"Person{\"
  +                 \"id=\" + id +                 \", name='\" + name + '\\'' +                 \",
  age=\" + age +                 \", address=\" + address +                 '}';     }
  } JPA\u7684dao\uFF0C\u6CE8\u610F\u8FD9\u91CC\u53EA\u8981\u7EE7\u627FMongoRepository\u4E0D\u7528\u5199\u6CE8\u89E3spring\u5C31\u80FD\u8BA4\u8BC6\u8FD9\u662F\u4E2ARepository\uFF0CMongoRepository\u63D0\u4F9B\u4E86\u57FA\u672C\u7684\u589E\u5220\u6539\u67E5\uFF0C\u4E0D\u7528\u5B9E\u73B0\u4FBF\u53EF\u76F4\u63A5\u8C03\u7528\uFF0C\u4F8B\u5982testMongo\u7684personDao.save(persons);
  \ public interface PersonDao extends MongoRepository<Person, ObjectId> {      @Query(value
  = \"{'age' : {'$gte' : ?0, '$lte' : ?1}, 'name':?2 }\",fields=\"{ 'name' : 1, 'age'
  : 1}\")     List<Person> findByAge(int age1, int age2, String name);  } mongoTemplate\u7684dao
  \ /**  * Created by DuLida on 2016/10/21.  */ public interface PersonMongoDao {
  \     List<Person> findAll();      void insertPerson(Person user);      void removePerson(String
  userName);      void updatePerson();      List<Person> findForRequery(String userName);
  } @Repository(\"personMongoImpl\") public class PersonMongoImpl implements PersonMongoDao
  {      @Resource     private MongoTemplate mongoTemplate;      @Override     public
  List<Person> findAll() {         return mongoTemplate.findAll(Person.class,\"person\");
  \    }      @Override     public void insertPerson(Person person) {         mongoTemplate.insert(person,\"person\");
  \    }      @Override     public void removePerson(String userName) {         mongoTemplate.remove(Query.query(Criteria.where(\"name\").is(userName)),\"person\");
  \    }      @Override     public void updatePerson() {         mongoTemplate.updateMulti(Query.query(Criteria.where(\"age\").gt(3).lte(5)),
  Update.update(\"age\",3),\"person\");     }      @Override     public List<Person>
  findForRequery(String userName) {         return mongoTemplate.find(Query.query(Criteria.where(\"name\").is(userName)),Person.class);
  \    } } JPA\u67E5\u8BE2\u7684\u6D4B\u8BD5\u7C7B\uFF1A  /**  * Created by DuLida
  on 2016/10/20.  */ @RunWith(SpringJUnit4ClassRunner.class) //\u544A\u8BC9junit spring\u914D\u7F6E\u6587\u4EF6
  @ContextConfiguration({\"classpath:spring/spring-context.xml\",\"classpath:spring/spring-mongo.xml\"})
  public class PersonDaoTest {      @Resource     private PersonDao personDao;      /*\u5148\u5F80\u6570\u636E\u5E93\u4E2D\u63D2\u516510\u4E2Aperson*/
  \    @Test     public void testMongo() {         List<Person> persons = new ArrayList<Person>();
  \        for (int i = 0; i < 10; i++) {            persons.add(new Person(\"name\"+i,i,new
  Address(\"\u77F3\u5BB6\u5E84\",\"\u88D5\u534E\u8DEF\",i)));         }         personDao.save(persons);
  \    }      @Test     public void findMongo() {         System.out.println(personDao.findByAge(2,8,\"name6\"));
  \     }  } mongoTemplate\u67E5\u8BE2\u7684\u6D4B\u8BD5\u7C7B  /**  * Created by
  DuLida on 2016/10/21.  */ @RunWith(SpringJUnit4ClassRunner.class) //\u544A\u8BC9junit
  spring\u914D\u7F6E\u6587\u4EF6 @ContextConfiguration({\"classpath:spring/spring-context.xml\",\"classpath:spring/spring-mongo.xml\"})
  public class MongoTemplateTest {      @Resource     private PersonMongoImpl personMongo;
  \     @Test     public void testMongoTemplate() {          //personMongo.insertPerson(new
  Person(\"wukong\",24,new Address(\"\u77F3\u5BB6\u5E84\",\"\u946B\u8FBE\u8DEF\",20)));
  \        //personMongo.removePerson(\"name3\");         //personMongo.updatePerson();
  \        //System.out.println(personMongo.findAll());         System.out.println(personMongo.findForRequery(\"wukong\"));
  \    } } \u6CE8\u610F\u6D4B\u8BD5\u524D\u8BF7\u5148\u901A\u8FC7testMongo()\u5411\u6570\u636E\u5E93\u4E2D\u63D2\u5165\u6570\u636E\u3002
  \u9879\u76EE\u6E90\u7801Git\u5730\u5740\uFF0C\u4EC5\u4F9B\u5B66\u4E60\u4F7F\u7528\uFF1Ahttps://github.com/dreamSmile/mongo.git
  \u53C2\u8003\u8D44\u6599http://docs.spring.io/spring-data/mongodb/docs/current/reference/html/
  \ \u672C\u6587\u539F\u521B\u53D1\u5E03\u4E8E\u6155\u8BFE\u7F51 \uFF0C\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\uFF0C\u8C22\u8C22\u5408\u4F5C\uFF01
  \u76F8\u5173\u6807\u7B7E\uFF1AJAVAMongoDB   \u65F6\u95F4\u4E36\u601D\u8003 \u5929\u624D\u5C0F\u9A74
  \u4F60\u597D\u5C0FSong \u9648\u8BCD\u6EE5\u8C031 4 \u4EBA\u63A8\u8350    \u6536\u85CF
  \u76F8\u5173\u9605\u8BFB JAVA\u7B2C\u4E09\u5B631-9\uFF08\u6A21\u62DF\u501F\u4E66\u7CFB\u7EDF\uFF09\u4F5C\u4E1A
  \u7528pkp\u7C7B\uFF0Cplayers\u7C7B\uFF0Cplaygame\u7C7B\u4E09\u6B65\u6559\u4F60\u5199\u6251\u514B\u724C\u6E38\u620F
  Java\u5165\u95E8\u7B2C\u4E09\u5B63\u4E60\u9898\uFF0C\u7B80\u6613\u6251\u514B\u724C\u6E38\u620F
  java\u5B66\u4E60\u7B2C\u4E8C\u5B63\u54D2\u54D2\u79DF\u8F66\u7CFB\u7EDF Java\u5165\u95E8\u7B2C\u4E8C\u5B63\u7B2C\u516D\u7AE0\u7EC3\u4E60\u9898
  \  \u8BF7\u767B\u5F55\u540E\uFF0C\u53D1\u8868\u8BC4\u8BBA \u8BC4\u8BBA\uFF08Enter+Ctrl\uFF09
  \u5168\u90E8\u8BC4\u8BBA2\u6761 \u4F60\u597D\u5C0FSong2F \u591A\u6570\u636E\u6E90\u5982\u4F55\u914D\u7F6E,
  \u6BD4\u5982\u591A\u4E2Amongodb\u6570\u636E\u5E93\u518D\u52A0mysql 1\u5929\u524D\u56DE\u590D\u8D5E\u540C0
  \ \u65F6\u95F4\u4E36\u601D\u8003 \u56DE\u590D \u4F60\u597D\u5C0FSong\uFF1A 41\u5206\u949F\u524D
  \u5C31\u5728\u52A0\u4E00\u4E2Adatasource\u5C31\u884C\u554A\uFF0C\u539F\u6765mysql\u7684datasource\u600E\u4E48\u52A0\uFF0C\u73B0\u5728\u5C31\u600E\u4E48\u52A0\u4E0A\u5C31\u884C\uFF0C\u52A0\u4E0A\u76F4\u63A5\u7528\u3002
  \u56DE\u590D \u4F60\u597D\u5C0FSong1F \u53C2\u8003\u4E00\u4E0B, \u5B66\u4E60\u4E86.
  2\u5929\u524D\u56DE\u590D\u8D5E\u540C0  \u65F6\u95F4\u4E36\u601D\u8003 JAVA\u5F00\u53D1\u5DE5\u7A0B\u5E08
  \u60C5\u52AB\u96BE\u9003\u3002 3\u7BC7\u624B\u8BB0 3\u63A8\u8350 \u4F5C\u8005\u7684\u70ED\u95E8\u624B\u8BB0
  \u795E\u5947\u7684Canvas\u8D1D\u585E\u5C14\u66F2\u7EBF\u753B\u5FC3\uFF0C\u7A0B\u5E8F\u5458\u7684\u8868\u767D
  1021\u6D4F\u89C818\u63A8\u83503\u8BC4\u8BBA \u6DF1\u5165\u63A2\u7A76setTimeout \u548CsetInterval
  44\u6D4F\u89C81\u63A8\u83500\u8BC4\u8BBA \u7F51\u7AD9\u9996\u9875\u4F01\u4E1A\u5408\u4F5C\u4EBA\u624D\u62DB\u8058\u8054\u7CFB\u6211\u4EEC\u5408\u4F5C\u4E13\u533A\u5173\u4E8E\u6211\u4EEC\u8BB2\u5E08\u62DB\u52DF\u5E38\u89C1\u95EE\u9898\u610F\u89C1\u53CD\u9988\u53CB\u60C5\u94FE\u63A5
  Copyright \xA9 2016 imooc.com All Rights Reserved | \u4EACICP\u5907 13046642\u53F7-2"
image: ""
specificationVersion: "0.14"
x-rank: "33.8"
x-alexaRank: 0
created: "2020-12-23"
modified: "2020-12-23"
url: http://api.specificationtoolbox.com/resources/tools/springmvcplusmongo/
tags:
- Work
- Window
- Wind
- VAT
- Upload
- Tree
- Time
- Threads
- Template
- Target
- System
- SQL
- Spring
- Sets
- Scope
- Schema
- Scan
- Runner
- Run
- Repos
- Remove
- Redirect
- Query
- Python
- Public
- Properties
- Private
- Print
- Plugins
- Players
- Placeholder
- Person
- Path
- Package
- MySQL
- Move
- MongoDB
- Mirror
- Method
- Maven
- Management
- Logging
- Local
- Load
- Layers
- Kong
- JSON
- Java
- Internal
- Instance
- Import
- Implements
- HTTPS
- HTTP
- HTML
- Host
- Hold
- Groups
- Go
- GitHub JSON Schema Search
- GitHub
- Framework
- Fields
- Encoding
- Driven
- Direct
- Defaults
- Default
- Datasource
- Current
- Criteria
- Copy
- Controller
- Context
- Content
- Connections
- Common
- Collections
- Collection
- Coding
- Client
- CLI
- Class
- Canvas
- Cache
- Block
- Array
- API
- Apache
- Aging
- Address
apis: []
x-common:
- type: x-github
  url: https://github.com/caijiahao/springMvcPlusMongo/
include: []
maintainers:
- FN: Kin Lane
  x-twitter: apievangelist
  email: info@apievangelist.com
---