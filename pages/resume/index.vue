<template>
  <div id="resume">
    <header>
      <section>
        <h1>punchi</h1>
        <p>web前端工程师</p>
      </section>
      <img src="//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/avatar.png" alt class="avatar" />
    </header>
    <section class="experience">
      <h2 class="section-title">项目经验</h2>
      <ol class="experience-ol">
        <li>
          <section>
            <h2>格隆汇官网</h2>
            <span>（2018-01 至今）</span>
          </section>
          <article>
            最开始是基于VUE的单页面应用，资讯为主，18年年中进行
            <span class="important">seo改版</span>
            ，将之前的单页面应用改为基于NUXT的
            <span class="important">服务端渲染页面</span>
            ，并且整个网站大范围的改版。
            <p>
              使用的主要技术框架：KOA，
              <span class="important">NUXT</span>
              ，Vue-i18n，less。
            </p>我在这个项目中主要负责：
            <ul>
              <li>1、i18的配置。</li>
              <li>2、官网首页、搜索页、文章页、股票详情页等页面的开发。</li>
              <li>3、将分页组件以及各种关注按钮抽离出来，配置成可通用组件。</li>
              <li>4、修复bug。</li>
            </ul>
          </article>
          <article>
            官网使用nuxt重构后，网站排名显著提高，收录数量显著上涨，PV、UV、IP日渐上涨，为公司带来了更多流量，当然这不只是前端组的功劳，还有运营等其他人一起努力。
            整个网站的SEO优化让我对前端认知更深了一步，前端不只是做个漂亮的页面和交互给用户欣赏，还可以使用更规范的编程，更语义化的标签，更完善的header给爬虫看，让更多页面被收录。
          </article>
        </li>
        <li>
          <section>
            <h2>CRM系统</h2>
            <span>（2018-05 至 2018-12）</span>
          </section>
          <article>
            给公司商务内部记录以及财务查询的一个CRM系统。
            <p>
              使用的主要技术框架：KOA，
              <span class="important">NUXT</span>
              ，Vue-i18n，less。
            </p>我在这个项目中主要负责：
            <ul>
              <li>1、i18的配置。</li>
              <li>2、官网首页、搜索页、文章页、股票详情页等页面的开发。</li>
              <li>3、将分页组件以及各种关注按钮抽离出来，配置成可通用组件。</li>
              <li>4、修复bug。</li>
            </ul>
          </article>
          <article></article>
        </li>
        <li>
          <section>
            <h2>格隆汇官网</h2>
            <span>（2018-01 至今）</span>
          </section>
          <article>
            最开始是基于VUE的单页面应用，资讯为主，18年年中进行
            <span class="important">seo改版</span>
            ，将之前的单页面应用改为基于NUXT的
            <span class="important">服务端渲染页面</span>
            ，并且整个网站大范围的改版。
            <p>
              使用的主要技术框架：KOA，
              <span class="important">NUXT</span>
              ，Vue-i18n，less。
            </p>我在这个项目中主要负责：
            <ul>
              <li>1、i18的配置。</li>
              <li>2、官网首页、搜索页、文章页、股票详情页等页面的开发。</li>
              <li>3、将分页组件以及各种关注按钮抽离出来，配置成可通用组件。</li>
              <li>4、修复bug。</li>
            </ul>
          </article>
          <article>
            官网使用nuxt重构后，网站排名显著提高，收录数量显著上涨，PV、UV、IP日渐上涨，为公司带来了更多流量，当然这不只是前端组的功劳，还有运营等其他人一起努力。
            整个网站的SEO优化让我对前端认知更深了一步，前端不只是做个漂亮的页面和交互给用户欣赏，还可以使用更规范的编程，更语义化的标签，更完善的header给爬虫看，让更多页面被收录。
          </article>
        </li>
      </ol>
    </section>
    <section class="education">
      <h2 class="section-title">教育经历</h2>
      <ol>
        <li>
          <p class="university">
            xxx野鸡大学
            <span class="time">2013-2017</span>
          </p>
          <p class="subject">专业：电气工程及其自动化</p>
          <p class="more-info">xxx,xxx,xxx。</p>
        </li>
      </ol>
    </section>
    <section class="skills">
      <h2 class="section-title">专业技能</h2>
      <ul>
        <li>啦啦啦还行</li>
        <li>啦啦啦还行</li>
        <li>啦啦啦还行</li>
        <li>啦啦啦还行</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experience: {
        glh: {},
        crm: {
          title: '商务CRM系统',
          time: '2018-05 至 2018-12',
          link: '',
          summary: '给公司商务内部记录以及财务查询的一个CRM系统。',
          technology: 'Vue、element-ui、Express、Sequelize、mysql。',
          use: [
            '登记来往公司信息。',
            '记录签约合同信息。',
            '记录合同执行情况以及实际执行内容。',
            '记录商谈预约以及执行情况。',
            '不同级别的用户有不同的权限。',
            '对关键信息的修改需要进过审核系统审核才能生效。'
          ],
          duty: [
            '负责对商务部需求的整理和修改。',
            '对ui界面以及交互的设计。',
            '对数据库表格关系的整理和设计。',
            '对整个业务的开发。'
          ],
          achievement:
            '整个项目下来，其实大大小小修改了无数次，交互从最开始的“反人类”到如今的“还可行”，让我对页面与用户的交互上有了更多的思考。数据库的表格关系也有点糟糕，以至于在后期的迭代上给我造成了一些麻烦，不过这也让我在后来的项目中对数据库表格关系有了更多的思考，在之后的项目上数据库表格关系都会尽可能的做到第三范式。'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
#resume {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  .important {
    font-weight: 700;
    color: #da7a0e;
  }
  header {
    display: flex;
    justify-content: space-between;
    section {
      height: 100%;
      h1 {
        margin-bottom: 20px;
        font-size: 30px;
      }
    }
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
  section {
    .section-title {
      font-size: 18px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 3px;
      margin-bottom: 3px;
    }
  }
  .experience-ol {
    li {
      > section {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2 {
          font-size: 16px;
          font-weight: 600;
        }
        span {
          font-size: 12px;
          color: rgb(92, 92, 92);
        }
      }
      article {
        font-size: 14px;
        line-height: 1.5em;
        color: #222;
      }
    }
  }
}
</style>

