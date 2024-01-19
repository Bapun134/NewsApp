import React, { Component } from 'react'
import Loading from './Loading';
import NewItems from './NewItems';
import PropTypes from 'prop-types'

export class NewsBody extends Component {

    /* propTypes and defaultProps for Request Parameters */
    static propTypes ={
      countryName: PropTypes.string,
      categoryName: PropTypes.string
    }
    static defaultProps ={
      countryName: 'us',
      categoryName: 'general'
    }

    /* creating a Constructor */
    constructor(props){
      super(props);
      this.state ={
        articles: [],
        pageNo: 1
      };
    }

    /* Using Fetch-API to parse data from an API Url*/
    async componentDidMount(){
      this.props.topLoadingBarProgress(20);
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.categoryName}&apiKey=8e1a26c46dde407f92b839cc48421e47&pageSize=12`;
      let data = await fetch(url);
      this.props.topLoadingBarProgress(40);
      let parsedData = await data.json();
      this.props.topLoadingBarProgress(70);
      this.setState({
        articles: parsedData.articles,
        totalArticle: parsedData.totalResults
      })
      this.props.topLoadingBarProgress(100);
    }

    PrevPage = async (props)=>{
      this.setState({loading:true})
      this.props.topLoadingBarProgress(20);
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.categoryName}&apiKey=8e1a26c46dde407f92b839cc48421e47&page=${this.state.pageNo - 1}&pageSize=12`;
      let data = await fetch(url);
      this.props.topLoadingBarProgress(40);
      let parsedData = await data.json();
      this.props.topLoadingBarProgress(70);
      this.setState({
        articles: parsedData.articles,
        pageNo: this.state.pageNo - 1,
        loading: false
      })
      this.props.topLoadingBarProgress(100);
    }

    NxtPage = async (props)=>{
        this.setState({loading:true})
        this.props.topLoadingBarProgress(20);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.categoryName}&apiKey=8e1a26c46dde407f92b839cc48421e47&page=${this.state.pageNo + 1}&pageSize=12`;
        let data = await fetch(url);
        this.props.topLoadingBarProgress(40);
        let parsedData = await data.json();
        this.props.topLoadingBarProgress(70);
        this.setState({
          articles: parsedData.articles,
          pageNo: this.state.pageNo + 1,
          loading: false
        })
        this.props.topLoadingBarProgress(100);
    }

  render() {
    return (
        <>
        <div className='container my-3'>
          {/* Headlines */}
            <h1 className='my-4 text-decoration display-4'>{this.props.categoryName} Headlines:</h1>
            {this.state.loading && <Loading/>}


          {/* Items */}
            <div className='container'>
              <div className='row'>
                {!this.state.loading && this.state.articles.map((element)=>{
                    return (<div className='col-md-3 mb-4' key={element.url}>
                            <NewItems titleName={element.title?element.title.slice(0,500):""} descriptionName={element.description?element.description.slice(0,500):""} imgUrl={element.urlToImage ? element.urlToImage:"https://cutewallpaper.org/24/image-placeholder-png/index-of-applicationmodulesthemesviewsdefaultassetsimages.png"} newsUrl={element.url}/>
                          </div>)
                })}
              </div>
            </div>  


          {/* previous and next */}
            <div className="container d-flex justify-content-between">
              <button type="button" disabled={this.state.pageNo<=1} onClick={this.PrevPage} className="btn btn-dark my-3">&larr; Previous</button>
              <button type="button" disabled={this.state.pageNo + 1 > Math.ceil(this.state.totalArticle/12)} onClick={this.NxtPage} className="btn btn-dark my-3">Next &rarr;</button>
            </div>
            
        </div>

        </>
    )
  }
}

export default NewsBody